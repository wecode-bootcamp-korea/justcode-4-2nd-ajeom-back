const express = require("express");
const router = express.Router();

const listController = require("../controllers/listController");

router.get('/post/:id', listController.getPostList);
router.get('/drawerpost/:id', listController.getDrawerPostList)
router.get('/profilepost/:id', listController.getProfilePostList)

module.exports = router;