const db = require("../models");

const getDoctorById = async (req, res) => {
  const id = req.query.id;

  try {
    const doctorData = await db.User.findOne({
      where: { id: id },
      include: { model: db.Doctor, as: "userDoctor" },
    });
    // console.log("doctor", doctorData);
    if (!doctorData) {
      res.status(404).send("doctor not found in this ID");
    } else {
      res.status(200).send(
        JSON.stringify({
          id: doctorData.id,
          firstName: doctorData.firstName,
          lastName: doctorData.lastName,
          email: doctorData.email,
          phone: doctorData.phone,
          address: doctorData.address,
          specialization: doctorData.userDoctor.specialization,
          imageURL: doctorData.userDoctor.imagePath,
        })
      );
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
const getAllDoctors = async (req, res) => {
  var role = req.query.role;
  try {
    const doctorData = await db.User.findAll({
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
      where: { role: role },
      include: { model: db.Doctor, as: "userDoctor" },
    });
    // console.log(doctorData);
    if (!doctorData) {
      res.status(404).send("doctor not found");
    }
    res.status(200).send(JSON.stringify(doctorData));
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = {
  getDoctorById,
  getAllDoctors,
};
