const userDao = require('../models/userDao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const res = require('express/lib/response');
const { response } = require('express');
const YOUR_SECRET_KET = process.env.SECRET_KEY;


const userCheck = async data => {
    console.log(data)
    const userInfo = await userDao.getUserImpormetion(data.id)
    
    if(userInfo.length !==0){
        //기존 유저
        //1.data.id를 JWT토큰으로 발행한다.
        //2.로컬스토리지에 get/set해서 로그인 유지 시킨다.
        const TOKEN = jwt.sign({kakaoId: userInfo[0].kakao_id},YOUR_SECRET_KET);
       
    }else{
        //기존유저가 아니면 else
        
        const userImp = await userDao.createUser(data.id,data.properties.nickname,data.properties.profile_image)
        const TOKEN = jwt.sign({kakaoId: data.id},YOUR_SECRET_KET);
        return userImp
    }
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
        .then(res => {
            console.log(res.data)
            userCheck(res.data)
        });

    
      
       
    } catch(err){
        console.log(err)
    }
    
}   

module.exports = { signupAndLogin };
