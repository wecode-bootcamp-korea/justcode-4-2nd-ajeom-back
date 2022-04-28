postDao = require("../models/postDao");

const getPost = async (id) => {
  return await postDao.getPost(id);
};

module.exports = { getPost };
