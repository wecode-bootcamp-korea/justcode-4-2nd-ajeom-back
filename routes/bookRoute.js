const express = require("express");
const router = express.Router();
const authorizedUser = require("../middlewares/authorization");
const bookController = require("../controllers/bookController");

router.post("/",authorizedUser.getUserIdByVerifyToken, bookController.postBook);
router.get("/:id", bookController.getBook);
router.get("/:id/post", bookController.getBook_postList);
router.delete("/:id",authorizedUser.getUserIdByVerifyToken,bookController.delBook );
module.exports = router;