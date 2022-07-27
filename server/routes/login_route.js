const express = require("express");
const router = express.Router();
const doctorLogin = require("../controller/login_controller");
const adminLogin = require("../controller/admin_controller");
router.post("/login", doctorLogin);
router.post("/admin/login", adminLogin.login);
module.exports = router;
