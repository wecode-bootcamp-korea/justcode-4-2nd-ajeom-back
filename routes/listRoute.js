const express = require("express");
const router = express.Router();

const listController = require("../controllers/listController");
const authorizedUser = require("../middlewares/authorization");

router.get('/post/:id', listController.getPostList);
router.get('/drawer', authorizedUser.getUserIdByVerifyToken, listController.getDrawerPostList)
router.get('/profile/:id', listController.getProfilePostList)
router.get('/myprofile', authorizedUser.getUserIdByVerifyToken, listController.getMyProfilePost)

module.exports = router;