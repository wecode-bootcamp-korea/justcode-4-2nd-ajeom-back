const bookDao = require("../models/bookDao");


const postBook = async (title,user_id,bookcover_url,description,postIdList) => {
  try {

     await bookDao.postBook(title,user_id,bookcover_url,description,postIdList);
    return;
  } catch (err) {
    console.log(err);
  }
};
const getBook = async (title,user_id,bookcover_url,description,postIdList) => {
  try {

     await bookDao.postBook(title,user_id,bookcover_url,description,postIdList);
    return;
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
    postBook,getBook
};
