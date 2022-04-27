keywordDao = require("../models/keywordDao");

const getKeywords = async () => {
  return await keywordDao.getKeywords();
};

const getSelectedKeyword = async (id) => {
  return await keywordDao.getSelectedKeyword(id);
};

const getRelatedKeywords = async (id) => {
  const categoryId = await keywordDao.getCategoryId(id);

  return await keywordDao.getRelatedKeywords(id, categoryId[0].category_id);
};

module.exports = { getKeywords, getSelectedKeyword, getRelatedKeywords };
