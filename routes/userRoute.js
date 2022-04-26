
const express =require("express");
const router = express.Router();
const authorizedUser = require("../middlewares/authorization");


const userController = require("../controllers/userControllers");


router.get("/myProfile",authorizedUser.getUserIdByVerifyToken, userController.getUserProfile);
router.post('/login',userController.signupAndLogin);


module.exports = router;