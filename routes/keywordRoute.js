const express = require("express");
const router = express.Router();

const keywordController = require("../controllers/keywordController");

// 메인 화면에 뜨는 키워드 목록
router.get("", keywordController.getKeywords);

// 키워드 선택 시 해당 키워드 이름과 연관 키워드 목록
router.get("/:id", keywordController.getKeywordsById);

module.exports = router;
