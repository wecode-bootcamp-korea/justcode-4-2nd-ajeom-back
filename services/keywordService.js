keywordDao = require("../models/keywordDao");

const getKeyword = async () => {
  return await keywordDao.getKeyword();
};

module.exports = { getKeyword };
