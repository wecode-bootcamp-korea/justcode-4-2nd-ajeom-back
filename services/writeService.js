writeDao = require("../models/writeDao");

const createPost = async (
  title,
  body,
  summary,
  subtitle,
  userId,
  isPublished,
  thumbnailUrl,keywordIdList
) => {
  const newPost = await writeDao.createPost(
    title,
    body,
    summary,
    subtitle,
    userId,
    isPublished,
    thumbnailUrl,keywordIdList
  );
  return newPost;
};

module.exports = { createPost };
