postDao = require("../models/postDao");

const getPost = async () => {
  return await postDao.getPost();
};

module.exports = { getPost };
