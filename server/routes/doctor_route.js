const express = require("express");
const router = express.Router();
const doctorController = require("../controller/doctor_controller");
router.get("/doctor-by-id", doctorController.getDoctorById);
router.get("/all", doctorController.getAllDoctors);
router.post("/add-prescription", doctorController.addPrescription);

module.exports = router;
