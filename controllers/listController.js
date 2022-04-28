const listService = require("../services/listService");

const getPostList = async (req, res) => {
  const postListInfo = req.query;
  const page = parseInt(postListInfo.page);
  const pageSize = parseInt(postListInfo.pageSize);
  const keywordId = req.params.id;

  try {
    if (!postListInfo || !pageSize) {
      res.status(400).json({ message: "NULL VALUE" });
    }
    const getPostList = await listService.getPostList(
      page,
      pageSize,
      keywordId
    );

    return res.status(200).json(getPostList);
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { getPostList };
