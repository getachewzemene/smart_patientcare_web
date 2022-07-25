const db = require("../models");

const createAppointemnt = async (req, res) => {
  const { id, title, status, patientId, doctorId } = req.body;

  try {
    const appointmentModel = await db.Appointment.create({
      id: id,
      title: title,
      status: status,
    });
    res.status(200).send({
      message: "appointment created success",
      data: appointmentModel,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
const getAllAppointment = async (req, res) => {
  try {
    const allAppointment = await db.Appointment.findeAll({
      include: [
        { model: db.Doctor, as: "doctorAppointment" },
        { model: db.Patient, as: "patientAppointment" },
      ],
    });
    res.status(200).send({
      message: "allAppointment Information",
      data: allAppointment,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { createAppointemnt, getAllAppointment };
