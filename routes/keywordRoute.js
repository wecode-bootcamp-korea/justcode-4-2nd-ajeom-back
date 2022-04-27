const express = require("express");
const router = express.Router();

const keywordController = require("../controllers/keywordController");

router.get("", keywordController.getKeyword);

module.exports = router;
