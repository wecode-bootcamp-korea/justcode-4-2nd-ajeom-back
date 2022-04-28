const bookService = require("../services/bookService");

const postBook = async (req, res) => {
  try {
    const { title,bookcover_url,description,postIdList} = req.body;
    const book_id= await bookService.postBook( title,req.userId,bookcover_url,description,postIdList)
    return res.status(200).json({ message: "post success",bookId:book_id });
  } catch (err) {
    console.log(err);
  }
};
const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const bookInfo = await bookService.getBook(id);
    return res.status(200).json({bookInfo:bookInfo});
  } catch (err) {
    console.log(err);
  }
};

const getBook_postList = async (req, res) => {
  try {
    const { id } = req.params;
    const postList = await bookService.getBook_postList(id);
    return res.status(200).json({postList:postList});
  } catch (err) {
    console.log(err);
  }
};

const delBook = async (req, res) => {
  try {
    const { id } = req.params;
    await bookService.delBook(id,req.userId );
    return res.status(200).json({ message: "delet success" });
  } catch (err) {
    console.log(err);
  }
};


module.exports = {
    postBook,getBook,getBook_postList,delBook 
};
