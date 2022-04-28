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
const getPost = async (user_id,offset,limit) => {
  try {

    const postList=  await writeDao.getPost(user_id,offset,limit);
    return postList;
  } catch (err) {
    console.log(err);
  }
};

const setIs_published = async (id,set) => {
  try {
  
    return await writeDao.setIs_published(id,set);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createPost,delPost,getPost,setIs_published };
