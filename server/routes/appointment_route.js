const express = require("express");
const router = express.Router();
const appointmentController = require("../controller/appointment_controller");
router.post("/add", appointmentController.createAppointemnt);
router.get("/by-doctorId", appointmentController.getAppointmentByDoctorId);
router.get("/by-patientId", appointmentController.getAppointmentByPatientId);
router.get("/all", appointmentController.getAllAppointment);
router.put("/update", appointmentController.updateAppointment);
module.exports = router;
