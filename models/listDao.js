const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPostList = async (start, pageSize, keywordId) => {
  return await prisma.$queryRaw`
  SELECT posts.id, title, summary, user_id, thumbnail_url, posts.created_at
  FROM posts
  JOIN post_keywords ON posts.id = post_keywords.post_id
  WHERE post_keywords.keyword_id = ${keywordId} AND posts.is_published = 1
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

module.exports = { getPostList, getPostAmount };
