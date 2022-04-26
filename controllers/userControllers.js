const {response}  = require('express');
const userService = require('../services/userService')

const signupAndLogin = async (req, res) => {
    try {
    const access_token = req.body.access_token
    const lastToken = await userService.signupAndLogin(access_token)
    console.log(lastToken)
    
    return lastToken

    } catch(err){
        console.log(err)
    }
}


const getUserProfile = async (req, res) => {
    try{
        const userId = req.userId;
        const ajeomProfile = await userService.getUserProfile(userId);
        return res.status(201).json({ajeomProfile});

    }catch(err){
        console.log(err);
        return res.status(400).json({message:err.message});

    }
} 

module.exports = { signupAndLogin,getUserProfile };















 