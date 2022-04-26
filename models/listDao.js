const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPostList = async (start, pageSize, keywordId) => {
  return await prisma.$queryRaw`
  SELECT id, title, summary, user_id, thumbnail_url, created_at
  FROM posts
  LIMIT ${start}, ${pageSize};
  `
}


const getPostAmount = async (keywordId) => {
  return await prisma.$queryRaw`
  SELECT id FROM posts;
  `
}

module.exports = { getPostList, getPostAmount }

// JOIN post_keywords ON post.id = post_keywords.post_id
// WHERE post_keywords.keyword_id = ${keywordId}