keywordService = require("../services/keywordService");

const getKeywords = async (req, res) => {
  try {
    const keywords = await keywordService.getKeywords();

    res.status(200).json({ keywords });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getKeywordsById = async (req, res) => {
  try {
    const { id } = req.params;
    // 선택된 키워드
    const selectedKeyword = await keywordService.getSelectedKeyword(id);
    // 선택된 키워드를 제외한 연관 키워드
    const relatedKeywords = await keywordService.getRelatedKeywords(id);

    res.status(200).json({ selectedKeyword, relatedKeywords });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { getKeywords, getKeywordsById };
