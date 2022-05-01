const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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

  const [post_id] = await prisma.$queryRaw`
		SELECT *
		FROM posts
		ORDER BY id DESC
		LIMIT 1`;

  for (i = 0; i < keywordIdList.length; i++) {
    await prisma.$queryRaw`
			INSERT INTO post_keywords (post_id,keyword_id) VALUES
	  (${post_id.id},${keywordIdList[i]});`;
  }
  return post_id.id;
};

const delPost = async (id, user_id) => {
  await prisma.$queryRaw`
		DELETE FROM book_posts
		WHERE book_posts.post_id = ${id};`;

  await prisma.$queryRaw` 
		DELETE FROM post_keywords
		WHERE post_keywords.post_id = ${id};`;

  await prisma.$queryRaw`
		DELETE FROM posts
		WHERE posts.id = ${id} and posts.user_id = ${user_id};`;
  return;
};

const getPost = async (user_id, offset, limit) => {
  let count = await prisma.$queryRaw` 
		SELECT COUNT(id) AS C FROM posts where user_id= ${user_id};`;
  count = count[0].C;

  if (count > limit) {
    const start = (offset - 1) * limit;
    return await prisma.$queryRaw` 
			SELECT id, title AS Title, summary AS Summary, user_id, thumbnail_url AS post_thumbnail_url, created_at
			FROM posts
			WHERE posts.user_id = ${user_id}
			order by id desc
			LIMIT ${start}, ${limit};`;
  } else {
    if (offset == 1) {
      return await prisma.$queryRaw` 
				SELECT id, title AS Title, summary AS Summary, user_id, thumbnail_url AS post_thumbnail_url, created_at FROM posts WHERE posts.user_id =  ${user_id} order by id desc;
			`;
    } else {
      return [];
    }
  }
};
module.exports = { createPost, delPost, getPost };
