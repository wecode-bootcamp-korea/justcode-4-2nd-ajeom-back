const express = require("express");
const router = express.Router();
const authorizedUser = require("../middlewares/authorization");
const writeController = require("../controllers/writeController");

router.post("/", authorizedUser.getUserIdByVerifyToken,writeController.createPost);
router.delete("/:id",authorizedUser.getUserIdByVerifyToken,writeController.delPost);

router.patch("/:id",authorizedUser.getUserIdByVerifyToken,writeController.patchPost);
 router.get("/",authorizedUser.getUserIdByVerifyToken,writeController.getPost);
module.exports = router;
