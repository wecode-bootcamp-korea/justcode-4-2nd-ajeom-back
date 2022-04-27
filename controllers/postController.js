postService = require("../services/postService");

// 글 클릭 시 detail 페이지에서 사용할 API
const getPost = async (req, res) => {
  try {
    // const { postId } = req.body
    const posts = await postService.getPost();

    res.status(200).json({ posts });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { getPost };
