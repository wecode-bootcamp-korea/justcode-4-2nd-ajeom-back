const express = require("express");
const router = express.Router();
const authorizedUser = require("../middlewares/authorization");
const bookController = require("../controllers/bookController");

router.post("/",authorizedUser.getUserIdByVerifyToken, bookController.postBook);
module.exports = router;