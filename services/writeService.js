writeDao = require("../models/writeDao");

const createPost = async (
  title,
  body,
  summary,
  subtitle,
  userId,
  isPublished,
  thumbnailUrl,keywordIdList
) => {
  const post_id = await writeDao.createPost(
    title,
    body,
    summary,
    subtitle,
    userId,
    isPublished,
    thumbnailUrl,keywordIdList
  );
  return post_id;
};
const delPost = async (id,user_id) => {
  try {

     await writeDao.delPost(id,user_id);
    return;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createPost,delPost };
