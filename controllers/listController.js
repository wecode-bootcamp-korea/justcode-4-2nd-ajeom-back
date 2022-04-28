const listService = require("../services/listService");

const getPostList = async (req, res) => {
  const postListInfo = req.query;
  const page = parseInt(postListInfo.page);
  const pageSize = parseInt(postListInfo.pageSize);
  const keywordId = req.params.id;

  console.log("controller");

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


const getDrawerPostList = async (req, res) => {
  const postListInfo = req.query;
  const page = parseInt(postListInfo.page);
  const pageSize = parseInt(postListInfo.pageSize);
  const userId = req.userId;

  try {
    if (!postListInfo || !pageSize || (userId === undefined)) {
      res.status(400).json({message:"NULL VALUE"});
    }
    const getDrawerPostList = await listService.getDrawerPostList(page, pageSize, userId)

    return res.status(200).json(getDrawerPostList)
  } catch (err) {
    return res.status (err.statusCode || 500).json({message: err.message});
  }
}


const getProfilePostList = async (req, res) => {
  const postListInfo = req.query;
  const page = parseInt(postListInfo.page);
  const pageSize = parseInt(postListInfo.pageSize);
  const userId = req.params.id;

  try {
    if (!postListInfo || !pageSize) {
      res.status(400).json({message:"NULL VALUE"});
    }
    const getProfilePostList = await listService.getProfilePostList(page, pageSize, userId)

    return res.status(200).json(getProfilePostList)
  } catch (err) {
    return res.status (err.statusCode || 500).json({message: err.message});
  }
}


module.exports = { getPostList, getDrawerPostList, getProfilePostList }
