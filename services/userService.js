const userDao = require('../models/userDao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const res = require('express/lib/response');
const { response } = require('express');
const YOUR_SECRET_KET = process.env.SECRET_KEY;


const userCheck = async data => {
    //console.log(data)
    const userInfo = await userDao.getUserImpormetion(data.id)
    const TOKEN = jwt.sign({kakaoId: data.id},YOUR_SECRET_KET);
    
    if(userInfo.length ==0){
        
        const userImp = await userDao.createUser(data.id,data.properties.nickname,data.properties.profile_image)
        
    }
    console.log("UsercheakToken",TOKEN)
    return TOKEN;

    //프론트단에 토큰전달
}

const signupAndLogin = async (access_token) => {
    try {   

        const getKakaoUser = await axios({
        method: "get",
        url: "https://kapi.kakao.com/v2/user/me",
        headers: {
            Authorization: 'Bearer ' + access_token,
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
        })
        const userToken = await userCheck(getKakaoUser.data)
        console.log("Userlogin-------",userToken)
        return userToken
    
      
       
    } catch(err){
        console.log(err)
    }
    
    
}   

module.exports = { signupAndLogin };
