const express = require("express");
const router = express.Router();
const authorizedUser = require("../middlewares/authorization");
const writeController = require("../controllers/writeController");

router.post("/", authorizedUser.getUserIdByVerifyToken,writeController.createPost);

module.exports = router;
