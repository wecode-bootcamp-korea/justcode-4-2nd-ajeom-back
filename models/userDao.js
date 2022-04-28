const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUserImpormetion = async (kakao_id) => {
  return await prisma.$queryRaw`
        SELECT id FROM users WHERE kakao_id = ${kakao_id};
    `;
};

const createUser = async (kakao_id, nickname, profile_img_url) => {
  return await prisma.$queryRaw`
        INSERT INTO users (kakao_id,nickname,profile_img_url) VALUES (${kakao_id}, ${nickname}, ${profile_img_url})
    `;
};

const getUserProfile = async (userId) => {
  return await prisma.$queryRaw`
      SELECT id, nickname, is_author, description, profile_img_url FROM users WHERE id = ${userId};
    `;
};

const getAuthorList = async () => {
  return await prisma.$queryRaw`
    SELECT id, nickname, description, profile_img_url FROM users WHERE is_author = 1;`;
};

const updateIsAuthor = async (userId, description) => {
  return await prisma.$queryRaw`
    UPDATE users SET description = ${description}, is_author = 1 WHERE id = ${userId};`;
};

const getAuthorBookList = async (userId) => {
  return await prisma.$queryRaw`
    SELECT books.id, title, bookcover_url, books.description, nickname, books.created_at FROM books
    join users on books.user_id = users.id
    WHERE is_author = 1 
    AND books.user_id = ${userId};
  `
}
module.exports = {
  getUserImpormetion,
  createUser,
  getUserProfile,
  getAuthorList,
  updateIsAuthor,
  getAuthorBookList
};

