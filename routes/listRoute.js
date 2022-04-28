const express = require("express");
const router = express.Router();

const listController = require("../controllers/listController");

router.get('/post/:id', listController.getPostList);

module.exports = router;