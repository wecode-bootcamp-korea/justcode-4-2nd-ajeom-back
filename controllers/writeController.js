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

    const postId = await writeService.createPost(
      title,
      body,
      summary,
      subtitle,
      req.userId,
      isPublished,
      thumbnailUrl,
      keywordIdList
    );

    res.status(200).json({ message: "POSTING_SUCCESS", postId: postId });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    await writeService.deletePost(id, req.userId);

    return res.status(200).json({ message: "DELETE_SUCCESS" });
  } catch (err) {
    console.log(err);
  }
};

const patchPost = async (req, res) => {
  try {
    const { id } = req.params;

    await writeService.setIsPublished(id, req.query.isPublished);

    return res.status(200).json({ message: "PATCH_SUCCESS" });
  } catch (err) {
    console.log(err);
  }
};

const getPost = async (req, res) => {
  try {
    const userId = req.userId;
    const offset = req.query.offset;
    const limit = req.query.limit;
    const postlist = await writeService.getPost(userId, offset, limit);
    return res.status(200).json({ PostList: postlist });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createPost, deletePost, getPost, patchPost };
