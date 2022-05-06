const express = require("express");
const router = express.Router();
const authorizedUser = require("../middlewares/authorization");
const writeController = require("../controllers/writeController");

// 새로운 post 추가
router.post(
  "/",
  authorizedUser.getUserIdByVerifyToken,
  writeController.createPost
);

// 해당 id의 post를 삭제
router.delete(
  "/:id",
  authorizedUser.getUserIdByVerifyToken,
  writeController.deletePost
);

// 해당 id의 post의 발행 여부 수정
router.patch(
  "/:id",
  authorizedUser.getUserIdByVerifyToken,
  writeController.patchPost
);

// 로그인한 유저가 쓴 post 리스트
router.get("/", authorizedUser.getUserIdByVerifyToken, writeController.getPost);

module.exports = router;
