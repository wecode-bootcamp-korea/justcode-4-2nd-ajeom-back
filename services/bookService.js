const bookDao = require("../models/bookDao");

const createBook = async (
  title,
  userId,
  bookCoverUrl,
  description,
  postIdList
) => {
  try {
    const bookId = await bookDao.createBook(
      title,
      userId,
      bookCoverUrl,
      description,
      postIdList
    );

    return bookId;
  } catch (err) {
    console.log(err);
  }
};

const getBook = async (id) => {
  try {
    const bookData = await bookDao.getBook(id);

    return bookData;
  } catch (err) {
    console.log(err);
  }
};

const postListByBookId = async (id) => {
  try {
    const postList = await bookDao.postListByBookId(id);

    return postList;
  } catch (err) {
    console.log(err);
  }
};

const deleteBook = async (id, userId) => {
  try {
    return await bookDao.deleteBook(id, userId);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createBook,
  getBook,
  postListByBookId,
  deleteBook,
};
