const listDao = require('../models/listDao')

const getPostList = async (page, pageSize, keywordId) => {
  try {
    let start = 0;
    page <= 0 ? page = 1 : start = (page - 1) * pageSize

    const getPostAmount = await listDao.getPostAmount(keywordId)
    const maxPage = Math.round((getPostAmount.length)/pageSize)
    if (page > maxPage) return null;

    const getPostList = await listDao.getPostList(start, pageSize, keywordId)
    return getPostList;
  } catch (err) {
    throw err;
  }
}

module.exports = { getPostList }