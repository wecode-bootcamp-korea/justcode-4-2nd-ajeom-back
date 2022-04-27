const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// 전체 키워드 리스트
const getKeywords = async () => {
  return await prisma.$queryRaw`
		SELECT id, name
		FROM   keywords
	`;
};

// 메인 페이지에 표시 될 키워드 리스트
const getMainKeywords = async () => {
  return await prisma.$queryRaw`
		SELECT name
		FROM   keywords
		WHERE  is_main = 1;
	`;
};

// 선택된 키워드의 카테고리 아이디
const getCategoryId = async (id) => {
  return await prisma.$queryRaw`
		SELECT category_id 
		FROM   keywords
		WHERE  id=${id};
	`;
};

// 선택된 키워드
const getSelectedKeyword = async (id) => {
  return await prisma.$queryRaw`
		SELECT name 
		FROM   keywords
		WHERE  id=${id};
	`;
};

// 같은 카테고리 키워드 중 선택된 키워드를 제외한 키워드 리스트
const getRelatedKeywords = async (id, categoryId) => {
  return await prisma.$queryRaw`
		SELECT name
		FROM (
			SELECT id, name, category_id, is_main
			FROM   keywords
			WHERE  id != ${id}) as other_keywords
		WHERE category_id = ${categoryId};
	`;
};

module.exports = {
  getKeywords,
  getMainKeywords,
  getCategoryId,
  getSelectedKeyword,
  getRelatedKeywords,
};
