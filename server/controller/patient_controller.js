const db = require("../models");

const getPatientById = async (req, res) => {
  const id = req.query.id;
  try {
    const patientData = await db.User.findOne({
      where: { id: id },
      include: { model: db.Patient, as: "userPatient" },
    });
    console.log("patient", patientData);
    if (!patientData) {
      res.status(404).send("patient not found in this ID");
    } else {
      res.status(200).send(
        JSON.stringify({
          id: patientData.id,
          firstName: patientData.firstName,
          lastName: patientData.lastName,
          email: patientData.email,
          phone: patientData.phone,
          address: patientData.address,
          weight: patientData.userPatient.weight,
          bloodGroup: patientData.userPatient.bloodGroup,
        })
      );
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
const getAllPatient = async (req, res) => {
  try {
    const patientData = await db.User.findAll({
      attributes: [
        "id",
        "firstName",
        "lastName",
        "email",
        "phone",
        "gender",
        "DOB",
        "address",
        "role",
      ],
      where: { role: "geust" },
      include: { model: db.Patient, as: "userPatient" },
    });
    if (!patientData) {
      res.status(404).send("patient not found");
    }
    res.status(200).send(patientData);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getAllPatient, getPatientById };
