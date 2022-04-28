const express = require("express");
const router = express.Router();

const writeController = require("../controllers/writeController");

router.post("", writeController.createPost);

module.exports = router;
