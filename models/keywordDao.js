const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getKeyword = async () => {
  return await prisma.$queryRaw`
		SELECT name FROM keywords;
	`;
};

module.exports = { getKeyword };
