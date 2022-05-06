const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// book 생성
const createBook = async (
  title,
  userId,
  bookCoverUrl,
  description,
  postIdList
) => {
  await prisma.$queryRaw`
    INSERT INTO books (title, user_id, bookcover_url, description)
    VALUES (${title}, ${userId}, ${bookCoverUrl}, ${description});
  `;

  // 생성된 book 의 id 가져오기
  const [bookId] = await prisma.$queryRaw`
    SELECT id, title, user_id, bookcover_url, description, created_at, updated_at
    FROM books
    ORDER BY id DESC
    LIMIT 1;
  `;

  // 생성된 book 의 정보를 중간 테이블(book_posts)에 입력
  for (i = 0; i < postIdList.length; i++) {
    await prisma.$queryRaw`
      INSERT INTO book_posts (post_id,book_id,sequence)
      VALUES (${postIdList[i]}, ${bookId.id}, ${i + 1});
    `;
  }
  return bookId.id;
};

// 해당 id의 book 정보 가져오기
const getBook = async (id) => {
  return await prisma.$queryRaw`
    SELECT
      id AS id,
      title AS title,
      user_id AS user_id,
      (SELECT nickname FROM users where id = user_id) AS username,
      (SELECT description FROM users where id = user_id) AS user_description,
      (SELECT profile_img_url FROM users where id = user_id) AS userimage_url,
      bookcover_url,
      created_at,
      description AS book_description
    FROM books
    WHERE books.id = ${id};
  `;
};

// 해당 id의 book을 구성하는 post 정보 가져오기
const postListByBookId = async (id) => {
  return await prisma.$queryRaw`
    SELECT p.id, p.title AS post_title, p.summary AS post_summary, p.thumbnail_url AS post_thumbnail_url
    FROM posts p
    JOIN book_posts bp on p.id = bp.post_id
    JOIN books b on bp.book_id = b.id
    WHERE b.id = ${id}
  `;
};

// 해당 id의 book을 삭제
const deleteBook = async (id, userId) => {
  await prisma.$queryRaw` 
    DELETE FROM book_posts
    WHERE book_id = ${id};
  `;

  await prisma.$queryRaw` 
    DELETE FROM books
    WHERE id = ${id} AND user_id = ${userId};
  `;
  return;
};

module.exports = {
  createBook,
  getBook,
  postListByBookId,
  deleteBook,
};
