const express = require("express");
const router = express.Router();

const userRoute = require("./userRoute");
const keywordRoute = require("./keywordRoute");
const postRoute = require("./postRoute");
const writeRoute = require("./writeRoute");
const listRoute = require("./listRoute")

router.use("/user", userRoute);
router.use("/keyword", keywordRoute);
router.use("/post", postRoute);
router.use("/write", writeRoute);
router.use('/list', listRoute)

module.exports = router;
