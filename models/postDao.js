const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getPost = async (id) => {
  return await prisma.$queryRaw`
		SELECT p.id, title, subtitle, body, thumbnail_url, u.nickname
		FROM   posts p
		JOIN   users u
		ON     p.user_id = u.id
		WHERE  p.id = ${id};
	`;
};

module.exports = { getPost };
