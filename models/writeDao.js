const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// 게시글 작성
const createPost = async (
  title,
  body,
  summary,
  subtitle,
  userId,
  isPublished,
  thumbnailUrl,
  keywordIdList
) => {
  await prisma.$queryRaw`
		INSERT INTO posts(title, body, summary, subtitle, user_id, is_published, thumbnail_url)
		VALUES (
			${title}
		, ${body}
		, ${summary}
		, ${subtitle}
		, ${userId}
		, ${isPublished}
		, ${thumbnailUrl}
		)
	`;

  const [postId] = await prisma.$queryRaw`
		SELECT id, title, body, summary, subtitle, user_id, is_published, thumbnail_url
		FROM posts
		ORDER BY id DESC
		LIMIT 1
	`;

  for (i = 0; i < keywordIdList.length; i++) {
    await prisma.$queryRaw`
			INSERT INTO post_keywords (post_id,keyword_id)
			VALUES (${postId.id},${keywordIdList[i]});
		`;
  }
  return postId.id;
};

const setIsPublished = async (id, set) => {
  return await prisma.$queryRaw` 
		UPDATE posts
		SET is_published = ${set}
		WHERE id = ${id};`;
};

// 게시글 삭제
const deletePost = async (id, user_id) => {
  await prisma.$queryRaw` 
		DELETE FROM book_posts
		WHERE book_posts.post_id = ${id};
	`;

  await prisma.$queryRaw` 
		DELETE FROM post_keywords
		WHERE post_keywords.post_id = ${id};
	`;

  await prisma.$queryRaw` 
		DELETE FROM posts
		WHERE posts.id = ${id} and posts.user_id = ${user_id};
	`;

  return;
};

// 해당 유저가 쓴 post 리스트
const getPost = async (user_id, offset, limit) => {
  // 해당 유저가 쓴 post 개수
  let count = await prisma.$queryRaw` 
		SELECT COUNT(id) AS C FROM posts where user_id= ${user_id};
	`;
  count = count[0].C;

  // 유저가 쓴 post 개수가 limit(요청한 post 수)보다 크면
  // offset과 limit을 이용하여 설정한 개수를 가져옴
  if (count > limit) {
    const start = (offset - 1) * limit;

    return await prisma.$queryRaw` 
			SELECT id, title AS Title, summary AS Summary, user_id, thumbnail_url AS post_thumbnail_url, created_at
			FROM posts
			WHERE posts.user_id = ${user_id}
			ORDER BY id DESC
			LIMIT ${start}, ${limit};
		`;
  } else {
    // 유저가 쓴 post 개수가 limit보다 작으면 offset=1일 때 전체 post를 가져옴
    if (offset == 1) {
      return await prisma.$queryRaw` 
				SELECT id, title AS Title, summary AS Summary, user_id, thumbnail_url AS post_thumbnail_url, created_at
				FROM posts 
				WHERE posts.user_id =  ${user_id}
				ORDER BY id DESC;
			`;
    } else {
      return [];
    }
  }
};

module.exports = { createPost, deletePost, getPost, setIsPublished };
