const express = require("express");
const router = express.Router();
const controller = require("../controller/admin_controller");
router.post("/create", controller.createAdmin);
// router.get("/socket-api/get-call-id/:id", controller.getCallId);
router.post("/add_doctor", controller.addDoctor);
module.exports = router;
