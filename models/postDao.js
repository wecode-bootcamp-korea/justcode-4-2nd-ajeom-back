const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getPost = async () => {
  return await prisma.$queryRaw`
		SELECT
			title
			, body
			, summary
			, subtitle
			, thumbnail_url
		FROM posts;
	`;
};

module.exports = { getPost };
