const express = require("express");
const router = express.Router();
const rtcTokenController = require("../controller/rtc_token_controller");
router.post("/rtc-token", rtcTokenController.generateToken);

module.exports = router;
