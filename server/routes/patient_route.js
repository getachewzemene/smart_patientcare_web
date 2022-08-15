const express = require("express");
const router = express.Router();
const patientController = require("../controller/patient_controller");
router.get("/by-id", patientController.getPatientById);
router.get("/all", patientController.getAllPatient);

module.exports = router;
