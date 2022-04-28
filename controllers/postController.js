postService = require("../services/postService");

// 글 클릭 시 detail 페이지에서 사용할 API
const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const postDetail = await postService.getPost(id);
    const previousPostInfo = await postService.getPreviousPostByUser(id);
    const nextPostInfo = await postService.getNextPostByUser(id);

    res.status(200).json({ postDetail, previousPostInfo, nextPostInfo });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { getPost };
