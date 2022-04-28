const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//list by keyword
const getPostList = async (start, pageSize, keywordId) => {
  return await prisma.$queryRaw`
  SELECT posts.id, title, summary, users.nickname, thumbnail_url, posts.created_at
  FROM posts
  JOIN users ON posts.user_id = users.id
  JOIN post_keywords ON posts.id = post_keywords.post_id
  WHERE post_keywords.keyword_id = ${keywordId} AND posts.is_published = 1
  order by id desc
  LIMIT ${start}, ${pageSize};
  `;
};

const getPostAmount = async (keywordId) => {
  return await prisma.$queryRaw`
  SELECT posts.id FROM posts
  JOIN post_keywords ON posts.id = post_keywords.post_id
  WHERE post_keywords.keyword_id = ${keywordId} AND posts.is_published = 1;
  `;
};

//list at Drawer
const getDrawerPostList = async (start, pageSize, userId) => {
  console.log(userId);
  return await prisma.$queryRaw`
  SELECT posts.id, title, summary, thumbnail_url, created_at
  FROM posts WHERE is_published = 0 AND user_id = ${userId}
  LIMIT ${start}, ${pageSize};
  `;
};

const getDrawerPostAmount = async (userId) => {
  return await prisma.$queryRaw`
  SELECT id FROM posts
  WHERE is_published = 0 AND user_id = ${userId};
  `;
};

//list at Profile
const getProfilePostList = async (start, pageSize, userId) => {
  return await prisma.$queryRaw`
  SELECT posts.id, title, summary, thumbnail_url, created_at FROM posts
  WHERE is_published = 1 AND user_id = ${userId}
  LIMIT ${start}, ${pageSize};
  `;
};

const getProfilePostAmount = async (userId) => {
  return await prisma.$queryRaw`
  SELECT id FROM posts
  WHERE is_published = 1 AND user_id = ${userId};
  `;
};

module.exports = {
  getPostList,
  getPostAmount,
  getDrawerPostList,
  getDrawerPostAmount,
  getProfilePostList,
  getProfilePostAmount,
};

module.exports = {
  getPostList,
  getPostAmount,
  getDrawerPostList,
  getDrawerPostAmount,
  getProfilePostList,
  getProfilePostAmount,
};
