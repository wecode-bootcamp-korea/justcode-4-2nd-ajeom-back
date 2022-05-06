postDao = require("../models/postDao");

const getPost = async (id) => {
  return await postDao.getPost(id);
};

const getPreviousPostByUser = async (id) => {
  const idAndCreatedTime = await postDao.getIdAndCreatedTime(id);
  return await postDao.getPreviousPostByUser(
    idAndCreatedTime[0].user_id,
    new Date(idAndCreatedTime[0].created_at)
  );
};

const getNextPostByUser = async (id) => {
  const idAndCreatedTime = await postDao.getIdAndCreatedTime(id);
  return await postDao.getNextPostByUser(
    idAndCreatedTime[0].user_id,
    new Date(idAndCreatedTime[0].created_at)
  );
};

module.exports = { getPost, getPreviousPostByUser, getNextPostByUser };
