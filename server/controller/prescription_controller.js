const db = require("../models");

const createPrescription = async (req, res) => {
  const {
    id,
    diseaseName,
    medicineName,
    description,
    dosage,
    doctoId,
    patientId,
  } = req.body;
  try {
    const prescriptionModel = await db.Prescription.create({
      id: id,
      diseaseName: diseaseName,
      medicineName: medicineName,
      description: description,
      dosage: dosage,
      doctoId: doctoId,
      patientId: patientId,
    });
    res.status(200).send({
      message: "prescription data added success",
      data: prescriptionModel,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
const getAllPrescription = async (req, res) => {
  try {
    const allPrescription = await db.Prescription.findAll({
      include: [
        { model: db.Doctor, as: "doctorPrescription" },
        { model: db.Patient, as: "patientPrescription" },
      ],
    });
    res.status(200).send({
      message: "all prescription",
      data: allPrescription,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
const getPrescriptionByPatientId = async (req, res) => {
  let patientId = req.query;
  try {
    const patientPrescription = await db.Prescription.findOne({
      where: { patientId: patientId },
      include: [
        { model: db.Doctor, as: "doctorPrescription" },
        { model: db.Patient, as: "patientPrescription" },
      ],
    });
    res.status(200).send({
      message: "patients prescription",
      data: patientPrescription,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = {
  createPrescription,
  getAllPrescription,
  getPrescriptionByPatientId,
};
