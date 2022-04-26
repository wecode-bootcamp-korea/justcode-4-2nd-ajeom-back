const {response}  = require('express');
const userService = require('../services/userService')

const signupAndLogin = async (req, res) => {
    try {
    const access_token = req.body.access_token
    const lastToken = await userService.signupAndLogin(access_token)
    
    console.log("UserlastToken",lastToken)
    return lastToken

    } catch(err){
        console.log(err)
    }
}

module.exports = { signupAndLogin };















 