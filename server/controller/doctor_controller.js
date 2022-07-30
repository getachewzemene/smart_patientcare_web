const db = require("../models");

const getDoctorById = async (req, res) => {
  const id = req.query.id;
  try {
    const doctorData = await db.User.findOne({
      where: { id: id },
      include: { model: db.Doctor, as: "doctor" },
    });
    console.log("doctor", doctorData.doctor.specialization);
    if (!doctorData) {
      res.status(404).send("doctor not found in this ID");
    }
    res.status(200).send(
      JSON.stringify({
        id: doctorData.id,
        firstName: doctorData.firstName,
        lastName: doctorData.lastName,
        email: doctorData.email,
        phone: doctorData.phone,
        address: doctorData.address,
        specialization: doctorData.doctor.specialization,
        imageURL: "http://localhost:4000/" + doctorData.doctor.imagePath,
      })
    );
  } catch (error) {
    res.status(400).send(error);
  }
};
const addPrescription = async (req, res) => {
  // const { id, diseaseName, medicineName, description, dosage,doctorId } = req.body;
  console.log(req.body);
  try {
    res.status(200).send("prescription added success");
  } catch (error) {
    res.status(400).send(JSON.stringify(error));
  }
};

module.exports = {
  getDoctorById,
  addPrescription,
};
