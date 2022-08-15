const express = require("express");
const router = express.Router();
const authController = require("../controller/auth_controller");
const adminController = require("../controller/admin_controller");
router.post("/login", authController.userLogin);
router.post("/register", authController.userRegister);
router.post("/admin/login", adminController.login);
module.exports = router;
