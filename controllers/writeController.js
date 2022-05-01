writeService = require("../services/writeService");

const createPost = async (req, res) => {
  try {
    const {
      title,
      body,
      summary,
      subtitle,
      isPublished,
      thumbnailUrl,
      keywordIdList,
    } = req.body;
    const post_id = await writeService.createPost(
      title,
      body,
      summary,
      subtitle,
      req.userId,
      isPublished,
      thumbnailUrl,
      keywordIdList
    );

    res.status(200).json({ message: "POSTING_SUCCESS", post_id: post_id });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};
const delPost = async (req, res) => {
  try {
    const { id } = req.params;
    await writeDao.delPost(id, req.userId);
    return res.status(200).json({ message: "DELETE_SUCCESS" });
  } catch (err) {
    console.log(err);
  }
};

const getPost = async (req, res) => {
  try {
    const user_id = req.userId;
    const offset = req.query.offset;
    const limit = req.query.limit;
    console.log(limit);
    const postlist = await writeService.getPost(user_id, offset, limit);
    return res.status(200).json({ PostList: postlist });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createPost, delPost, getPost };
