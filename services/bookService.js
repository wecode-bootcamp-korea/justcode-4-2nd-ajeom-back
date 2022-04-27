const bookDao = require("../models/bookDao");


const postBook = async (title,user_id,bookcover_url,description,postIdList) => {
  try {

     await bookDao.postBook(title,user_id,bookcover_url,description,postIdList);
    return;
  } catch (err) {
    console.log(err);
  }
};
const getBook = async (id) => {
  try {

     const bookData= await bookDao.getBook(id);
    return bookData;
  } catch (err) {
    console.log(err);
  }
};

const getBook_postList = async (id) => {
  try {

     const postList= await bookDao.getBook_postList(id);
    return postList;
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
    postBook,getBook,getBook_postList
};
