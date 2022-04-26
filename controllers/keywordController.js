keywordService = require("../services/keywordService");

const getKeyword = async (req, res) => {
  try {
    // const { keywordId } = req.body
    const keywords = await keywordService.getKeyword();

    res.status(200).json({ keywords });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { getKeyword };
