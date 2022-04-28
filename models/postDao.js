const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getPost = async (id) => {
  return await prisma.$queryRaw`
	SELECT p.id, title, subtitle, body, thumbnail_url
	, p.user_id, u.nickname, u.description, u.profile_img_url
		, json_arrayagg(
				json_object(
					'id', k.id, 
								'name', k.name
								)) AS keywords
	FROM   posts p
	JOIN   users u
	ON     p.user_id = u.id
	LEFT JOIN   post_keywords pk
	ON     pk.post_id = p.id
	LEFT JOIN   keywords k
	ON     pk.keyword_id = k.id
	WHERE  p.id = ${id}
	GROUP BY p.id;
	`;
};

const getIdAndCreatedTime = async (id) => {
  return await prisma.$queryRaw`
		SELECT user_id, created_at
		FROM   posts
		WHERE  id=${id};
	`;
};

const getPreviousPostByUser = async (userId, createdTime) => {
  return await prisma.$queryRaw`
		SELECT id, title, user_id
		FROM   posts
		WHERE  user_id=${userId}
		AND    created_at < ${createdTime}
		ORDER BY created_at DESC
		LIMIT 1;
	`;
};

const getNextPostByUser = async (userId, createdTime) => {
  return await prisma.$queryRaw`
		SELECT id, title, user_id
		FROM   posts
		WHERE  user_id=${userId}
		AND    created_at > ${createdTime}
		ORDER BY created_at
		LIMIT 1;
	`;
};

module.exports = {
  getPost,
  getIdAndCreatedTime,
  getPreviousPostByUser,
  getNextPostByUser,
};
