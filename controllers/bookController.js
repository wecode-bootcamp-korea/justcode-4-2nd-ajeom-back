const bookService = require("../services/bookService");

const createBook = async (req, res) => {
  try {
    const { title, bookCoverUrl, description, postIdList } = req.body;
    const bookId = await bookService.createBook(
      title,
      req.userId,
      bookCoverUrl,
      description,
      postIdList
    );

    return res
      .status(200)
      .json({ message: "CREATING_BOOK_SUCCESS", bookId: bookId });
  } catch (err) {
    console.log(err);
  }
};

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const bookInfo = await bookService.getBook(id);

    return res.status(200).json({ bookInfo: bookInfo });
  } catch (err) {
    console.log(err);
  }
};

const postListByBookId = async (req, res) => {
  try {
    const { id } = req.params;
    const postList = await bookService.postListByBookId(id);

    return res.status(200).json({ postList: postList });
  } catch (err) {
    console.log(err);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await bookService.deleteBook(id, req.userId);
    return res.status(200).json({ message: "DELETE_SUCCESS" });
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
