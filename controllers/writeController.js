writeService = require("../services/writeService");

// 글 클릭 시 detail 페이지에서 사용할 API
const createPost = async (req, res) => {
  try {
    const {
      title,
      body,
      summary,
      subtitle,
      isPublished,
      thumbnailUrl,
      keywordIdList
    } = req.body;
    await writeService.createPost(
      title,
      body,
      summary,
      subtitle,
      req.userId,
      isPublished,
      thumbnailUrl,keywordIdList
    );

    res.status(200).json({ message: "POSTING_SUCCESS" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { createPost };
