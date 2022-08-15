const express = require("express");
const router = express.Router();
const controller = require("../controller/appointment_controller");
router.post("/add", controller.createAppointemnt);
router.get("/by-doctorId", controller.getAppointmentByDoctorId);
router.get("/by-patientId", controller.getAppointmentByPatientId);
router.get("/all", controller.getAllAppointment);
router.put("/update", controller.updateAppointment);
module.exports = router;
