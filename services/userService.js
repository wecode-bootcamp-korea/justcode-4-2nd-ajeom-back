const userDao = require("../models/userDao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const res = require("express/lib/response");
const { response } = require("express");
const YOUR_SECRET_KET = process.env.SECRET_KEY;



  const userCheck = async (data) => {
    //console.log(data)
    const user = await userDao.getUserImpormetion(data.id);
  
    if (user.length === 0) {
      const userImp = await userDao.createUser(
        data.id,
        data.properties.nickname,
        data.properties.profile_image
      );
    }
    const userInfo = await userDao.getUserImpormetion(data.id);
    const TOKEN = jwt.sign({ ajeomId: userInfo[0].id }, YOUR_SECRET_KET);
    console.log("userService", TOKEN);
  
    return TOKEN;
  
};

const signupAndLogin = async (access_token) => {
  try {
    const getKakaoUser = await axios({
      method: "get",
      url: "https://kapi.kakao.com/v2/user/me",
      headers: {
        Authorization: "Bearer " + access_token,
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    const userToken = await userCheck(getKakaoUser.data);

    return userToken;
  } catch (err) {
    console.log(err);
  }
};

const getUserProfile = async (userId) => {
  try {
    const ajeomProfile = await userDao.getUserProfile(userId);
    return ajeomProfile;
  } catch (err) {
    console.log(err);
  }
};

const getAuthorList = async () => {
  try {
    return await userDao.getAuthorList();
  } catch (err) {
    console.log(err);
  }
};


const getAuthorProfile = async (userId) => {
  try {
    return await userDao.getUserProfile(userId);
  } catch (err) {
    console.log(err);
  }
};

const updateIsAuthor = async (userId, description) => {
  try {
    return await userDao.updateIsAuthor(userId, description);
  } catch (err) {
    console.log(err);
  }
};

const getAuthorBookList =async(userId) =>{
  try{

    return await userDao.getAuthorBookList(userId);
  }catch(err){
    console.log(err);
  }
}

module.exports = {
  signupAndLogin,
  getUserProfile,
  getAuthorList,
  getAuthorProfile,
  updateIsAuthor,
  getAuthorBookList
  
};
