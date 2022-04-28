const express = require("express");
const router = express.Router();
const authorizedUser = require("../middlewares/authorization");
const userController = require("../controllers/userControllers");


router.get(
  "/myProfile",
  authorizedUser.getUserIdByVerifyToken,
  userController.getUserProfile
);

router.get(
  "/authorBookList",
  authorizedUser.getUserIdByVerifyToken,
  userController.getAuthorBookList
);

router.post("/login", userController.signupAndLogin);
router.get("/authorList", userController.getAuthorList);
router.get("/authorProfile/:author_id", userController.getAuthorProfile);
router.post(
  "/authorRequest",
  authorizedUser.getUserIdByVerifyToken,
  userController.updateIsAuthor
);

module.exports = router;
