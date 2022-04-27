const bookService = require("../services/bookService");

const postBook = async (req, res) => {
  try {
    const { title,bookcover_url,description,postIdList} = req.body;
    bookService.postBook( title,req.userId,bookcover_url,description,postIdList)
    return res.status(200).json({ message: "post success" });
  } catch (err) {
    console.log(err);
  }
};
const getBook = async (req, res) => {
  try {
    const { title,bookcover_url,description,postIdList} = req.body;
    bookService.postBook( title,req.userId,bookcover_url,description,postIdList)
    return res.status(200).json({ message: "post success" });
  } catch (err) {
    console.log(err);
  }
};


module.exports = {
    postBook,getBook
};
