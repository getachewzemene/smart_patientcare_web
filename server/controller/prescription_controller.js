const { date } = require("joi");
const db = require("../models");

const addPrescription = async (req, res) => {
  const {
    id,
    diseaseName,
    medicineName,
    description,
    dosage,
    compliant,
    investigationResult,
    treatment,
    doctorId,
    patientId,
  } = req.body;
  console.log(doctorId);
  try {
    const isPrescriptionFound = await db.Prescription.findOne({
      where: {
        patientId: patientId,
        dosage: dosage,
        description: description,
        medicineName: medicineName,
      },
    });
    if (isPrescriptionFound) {
      res.status(409).send("prescription already found");
    } else {
      const prescriptionModel = await db.Prescription.create(
        {
          id: id,
          diseaseName: diseaseName,
          medicineName: medicineName,
          description: description,
          dosage: dosage,
          doctorId: doctorId,
          patientId: patientId,
          prescriptionHistory: {
            id: id,
            compliant: compliant,
            investigationResult: investigationResult,
            treatment: treatment,
            doctorId: doctorId,
            patientId: patientId,
            prescriptionId: id,
          },
        },
        {
          include: [{ model: db.MedicalHistory, as: "prescriptionHistory" }],
        }
      );

      if (!prescriptionModel) {
        res.status(404).send("Error while creating prescription");
      } else {
        res.status(200).send("prescription data added success");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("bad request error");
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
const getMedicalHistory = async (req, res) => {
  let patientId = req.query.id;
  try {
    const medicalHistory = await db.User.findOne({
      attributes: [
        "id",
        "firstName",
        "lastName",
        "email",
        "phone",
        "gender",
        "DOB",
        "address",
      ],
      where: { id: patientId },
      include: [
        {
          model: db.Patient,
          as: "userPatient",
          include: [
            {
              model: db.Prescription,
              as: "patientPrescription",
              include: [
                {
                  model: db.MedicalHistory,
                  as: "prescriptionHistory",
                  include: [
                    {
                      model: db.Doctor,
                      as: "historyDoctor",
                      include: [
                        {
                          model: db.User,
                          as: "doctorUser",
                          attributes: [
                            "id",
                            "firstName",
                            "lastName",
                            "email",
                            "phone",
                            "gender",
                            "DOB",
                            "address",
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
    if (!medicalHistory) {
      res.status(404).send("data not found");
    } else {
      // console.log(medicalHistory);
      res.status(200).send(medicalHistory);
    }
  } catch (error) {
    // console.log(error);
    res.status(400).send(error);
  }
};
module.exports = {
  addPrescription,
  getAllPrescription,
  getMedicalHistory,
};
