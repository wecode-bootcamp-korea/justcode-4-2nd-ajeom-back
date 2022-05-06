writeDao = require("../models/writeDao");

const createPost = async (
  title,
  body,
  summary,
  subtitle,
  userId,
  isPublished,
  thumbnailUrl,
  keywordIdList
) => {
  const postId = await writeDao.createPost(
    title,
    body,
    summary,
    subtitle,
    userId,
    isPublished,
    thumbnailUrl,
    keywordIdList
  );
  return postId;
};

const deletePost = async (id, userId) => {
  try {
    return await writeDao.deletePost(id, userId);
  } catch (err) {
    console.log(err);
  }
};

const getPost = async (userId, offset, limit) => {
  try {
    const postList = await writeDao.getPost(userId, offset, limit);

    return postList;
  } catch (err) {
    console.log(err);
  }
};

const setIsPublished = async (id, set) => {
  try {
    return await writeDao.setIsPublished(id, set);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createPost, deletePost, getPost, setIsPublished };
