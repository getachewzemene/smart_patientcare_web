const express = require("express");
const router = express.Router();
const controller = require("../controller/admin_controller");
router.post("/admin/create", controller.createAdmin);
// router.get("/socket-api/get-call-id/:id", controller.getCallId);
module.exports = router;
