const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createPost = async (
  title,
  body,
  summary,
  subtitle,
  userId,
  isPublished,
  thumbnailUrl,keywordIdList
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

	for(i=0;i<keywordIdList.length;i++){
		await prisma.$queryRaw`
		INSERT INTO post_keywords (post_id,keyword_id) VALUES
	  (${post_id.id},${keywordIdList[i]});`;
	}
	return post_id.id;
};


const delPost =  async (id,user_id) => {

	await prisma.$queryRaw` 
	 DELETE FROM posts
	WHERE posts.id = ${id} and posts.user_id = ${user_id};`;
  ;
  return ;
  }
module.exports = { createPost,delPost  };
