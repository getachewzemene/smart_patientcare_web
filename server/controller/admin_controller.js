const db = require("../models");
createAdmin = async (req, res) => {
  const { id, firstName, lastName, email, password, phone } = req.body;

  try {
    const createdModel = await db.Admin.create({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
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
addDoctor = async (req, res) => {
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
  try {
    const doctorModel = await db.User.create(
      {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
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
        include: [db.Doctor],
      }
    );
    res.status(200).send({
      message: "Doctor table Created Success",
      data: doctorModel,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = { createAdmin, addDoctor };
