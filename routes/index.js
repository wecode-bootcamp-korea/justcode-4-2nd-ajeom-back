const express = require("express");
const router = express.Router();

const userRoute = require("./userRoute");
const listRoute = require("./listRoute");

router.use('/user', userRoute)
router.use('/list', listRoute)

module.exports = router;