const db = require("../models");

const createMedicalHistory = async (req, res) => {
  const {
    id,
    compliant,
    investigationResult,
    treatment,
    doctorId,
    patientId,
    prescriptionId,
  } = req.body;
  try {
    const medicalHistoryModel = await db.MedicalHistory.create({
      id: id,
      compliant: compliant,
      investigationResult: investigationResult,
      treatment: treatment,
      doctorId: doctorId,
      patientId: patientId,
      prescriptionId: prescriptionId,
    });
    res.status(200).send({
      message: "medical history data added success",
      data: medicalHistoryModel,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getMedicalHistoryByPatientId = async (req, res) => {
  const patientId = req.query;
  try {
    const patientMedicalHistory = await db.MedicalHistory.findOne({
      where: { patientId: patientId },
      include: [
        { model: db.Doctor, as: "doctorMedicalHistory" },
        { model: db.Patient, as: "patientMedicalHistory" },
        { model: db.Prescription, as: "PrescriptionHistory" },
      ],
    });
    if (!patientMedicalHistory) res.status(404).send("data not found");

    res.status(200).send({
      message: "patient Medical History",
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { createMedicalHistory, getMedicalHistoryByPatientId };
