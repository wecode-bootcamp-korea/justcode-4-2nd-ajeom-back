const express = require("express");
const router = express.Router();
const authorizedUser = require("../middlewares/authorization");
const bookController = require("../controllers/bookController");

// book 생성
router.post(
  "/",
  authorizedUser.getUserIdByVerifyToken,
  bookController.createBook
);

// 해당 id의 book 정보
router.get("/:id", bookController.getBook);

// 해당 id의 book을 구성하는 post 정보
router.get("/:id/post", bookController.postListByBookId);

// 해당 id의 book 삭제
router.delete(
  "/:id",
  authorizedUser.getUserIdByVerifyToken,
  bookController.deleteBook
);

module.exports = router;
