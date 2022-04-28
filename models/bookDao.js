const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postBook = async (title,user_id,bookcover_url,description,postIdList) => {
    await prisma.$queryRaw`
  INSERT INTO books (title,user_id,bookcover_url,description) VALUES
(${title},${user_id},${bookcover_url},${description});`;
const [book_id] = await prisma.$queryRaw`
SELECT *
FROM books
ORDER BY id DESC
LIMIT 1`;
console.log(book_id.id)
for(i=0;i<postIdList.length;i++){
    await prisma.$queryRaw`
    INSERT INTO book_posts (post_id,book_id,sequence) VALUES
  (${postIdList[i]},${book_id.id},${i+1});`;
}
  return book_id.id;
};

const getBook =  async (id) => {
  return  await prisma.$queryRaw`
  select 
      bo.id id,
      bo.title title,
      bo.user_id user_id,
      (select nickname from users where id = bo.user_id) username,
      (select description from users where id = bo.user_id) user_description,
      (select profile_img_url from users where id = bo.user_id) userimage_url,
      bo.bookcover_url bookcover_url,
      bo.created_at created_at,
      bo.description book_description
  from books bo
  where bo.id = ${id};`;
}

const getBook_postList =  async (id) => {
  return  await prisma.$queryRaw`
  SELECT posts.id,posts.title AS post_title,posts.summary AS post_summary,posts.thumbnail_url AS post_thumbnail_url
  FROM 
  posts
  JOIN book_posts B on posts.id = B.post_id
  JOIN books C on B.book_id = C.id
  WHERE C.id = ${id}`;
}

const delBook =  async (id,user_id) => {
  await  prisma.$queryRaw` 
  DELETE FROM book_posts
  WHERE book_posts.book_id = ${id};`

  await prisma.$queryRaw` 
   DELETE FROM books
  WHERE books.id = ${id} and books.user_id = ${user_id};`;
;
return ;
}



module.exports = {
    postBook,getBook,getBook_postList,delBook
};
