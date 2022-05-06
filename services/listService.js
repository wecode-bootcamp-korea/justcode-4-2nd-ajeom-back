const listDao = require("../models/listDao");

const getPostList = async (page, pageSize, keywordId) => {
  try {
    let start = 0;
    page <= 0 ? (page = 1) : (start = (page - 1) * pageSize);

    const getPostAmount = await listDao.getPostAmount(keywordId);
    const maxPage = Math.ceil(getPostAmount.length / pageSize);
    if (page > maxPage) return null;

    const getPostList = await listDao.getPostList(start, pageSize, keywordId);
    return getPostList;
  } catch (err) {
    throw err;
  }
};

const getDrawerPostList = async (page, pageSize, userId) => {
  try {
    let start = 0;
    page <= 0 ? (page = 1) : (start = (page - 1) * pageSize);

    const getDrawerPostAmount = await listDao.getDrawerPostAmount(userId);
    const maxPage = Math.ceil(getDrawerPostAmount.length / pageSize);
    if (page > maxPage) return null;

    const getDrawerPostList = await listDao.getDrawerPostList(
      start,
      pageSize,
      userId
    );
    return getDrawerPostList;
  } catch (err) {
    throw err;
  }
};

const getProfilePostList = async (page, pageSize, userId) => {
  try {
    let start = 0;
    page <= 0 ? (page = 1) : (start = (page - 1) * pageSize);

    const getProfilePostAmount = await listDao.getProfilePostAmount(userId);
    const maxPage = Math.ceil(getProfilePostAmount.length / pageSize);
    if (page > maxPage) return null;

    const getProfilePostList = await listDao.getProfilePostList(
      start,
      pageSize,
      userId
    );
    return getProfilePostList;
  } catch (err) {
    throw err;
  }
};

const getMyProfilePost = async (page, pageSize, userId) => {
  try {
    let start = 0;
    page <= 0 ? (page = 1) : (start = (page - 1) * pageSize);

    const getMyPostAmount = await listDao.getMyPostAmount(userId);
    const maxPage = Math.ceil(getMyPostAmount.length / pageSize);
    if (page > maxPage) return null;

    const getMyProfilePost = await listDao.getMyProfilePost(
      start,
      pageSize,
      userId
    );
    return getMyProfilePost;
  } catch (err) {
    throw err;
  }
};

module.exports = { getPostList, getDrawerPostList, getProfilePostList, getMyProfilePost };
