const express = require("express");
const router = express.Router();
const doctorController = require("../controller/doctor_controller");
const prescriptionController = require("../controller/prescription_controller");
router.get("/doctor-by-id", doctorController.getDoctorById);
router.get("/all", doctorController.getAllDoctors);
router.post("/add-prescription", prescriptionController.addPrescription);
router.get("/patient-history/by-id", prescriptionController.getMedicalHistory);
module.exports = router;
