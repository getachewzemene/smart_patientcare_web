const db = require("../models");
const bcrypt = require("bcryptjs");
const authToken = require("../middleware/auth");
const createAdmin = async (req, res) => {
  const { id, firstName, lastName, email, password, phone } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  try {
    const createdModel = await db.Admin.create({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword,
      phone: phone,
    });
    res
      .status(200)
      .send({ message: "admin table created success", data: createdModel });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await db.Admin.findOne({
      where: { email: email },
    });
    if (!admin) res.status(404).send("data not found");
    const isPasswordCorrect = bcrypt.compareSync(password, admin.password);
    if (!isPasswordCorrect) res.status(403).send("incorrect passord");
    res.status(200).send({
      message: "admin login success",
      data: {
        id: admin.id,
        email: admin.email,
        token: authToken.createToken,
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
const addDoctor = async (req, res) => {
  const {
    id,
    firstName,
    lastName,
    email,
    password,
    phone,
    gender,
    DOB,
    address,
    specialization,
  } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  try {
    const doctorModel = await db.User.create(
      {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashPassword,
        phone: phone,
        gender: gender,
        DOB: DOB,
        address: address,
        role: "doctor",
        doctor: {
          id: id,
          specialization: specialization,
        },
      },
      {
        include: [{ model: db.Doctor, as: "doctor" }],
      }
    );
    res.status(200).send({
      message: "Doctor table Created Success",
      data: doctorModel,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
const addDisease = async (req, res) => {
  const { id, diseaseName, category, precuation, symptom } = req.body;
  try {
    const diseaseModel = await db.Disease.create({
      id: id,
      diseaseName: diseaseName,
      category: category,
      precuation: precuation,
    });
    const symptomModel = await db.Symptom.bulkCreate(symptom);
    if (diseaseModel && symptomModel)
      await diseaseModel.addSymptom(symptomModel);
    res.status(200).send({
      message: "disease table created success",
      data: JSON.stringify(diseaseModel),
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
const createSchedule = async (req, res) => {
  const { id, workingDays, startTime, endTime, doctorId } = req.body;

  try {
    const scheduleModel = await db.Schedule.create({
      id: id,
      workingDays: workingDays,
      startTime: startTime,
      endTime: endTime,
      doctorId: doctorId,
    });
    res.status(200).send({
      message: "Doctor Schedule created Success",
      data: scheduleModel,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { createAdmin, addDoctor, addDisease, createSchedule, login };
