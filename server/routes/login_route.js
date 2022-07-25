const express = require("express");
const router = express.Router();
const login = require("../controller/login_controller");

router.post("/login", login);

module.exports = router;
