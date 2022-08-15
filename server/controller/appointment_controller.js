const e = require("express");
const db = require("../models");

const createAppointemnt = async (req, res) => {
  const { id, title, status, patientId, doctorId } = req.body;
  // console.log(req.body);
  try {
    const appointmentModel = await db.Appointment.create({
      id: id,
      title: title,
      status: status,
      doctorId: doctorId,
      patientId: patientId,
    });
    if (appointmentModel) {
      res.status(200).send("appointment added success");
    } else {
      res.status(404).send("faild to create and appointment try again");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
const getAllAppointment = async (req, res) => {
  try {
    const allAppointment = await db.Appointment.findAll({
      include: [
        { model: db.Doctor, as: "doctorAppointment" },
        { model: db.Patient, as: "patientAppointment" },
      ],
    });
    res.status(200).send(allAppointment);
  } catch (error) {
    res.status(400).send(error);
  }
};
const getAppointmentByPatientId = async (req, res) => {
  var id = req.query.id;
  try {
    const patientAppointment = await db.Appointment.findOne({
      where: { patientId: id },
      include: [
        { model: db.Doctor, as: "doctorAppointment" },
        { model: db.Patient, as: "patientAppointment" },
      ],
    });
    res.status(200).send(patientAppointment);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAppointmentByDoctorId = async (req, res) => {
  var id = req.query.id;
  console.log(id);
  try {
    const doctorAppointment = await db.Appointment.findAll({
      where: { doctorId: id },
      include: [
        {
          model: db.Patient,
          as: "appointmentPatient",
          include: [{ model: db.User, as: "patientUser" }],
        },
      ],
    });
    // doctorAppointment.map((appointment) => {
    //   console.log(appointment.appointmentPatient.patientUser.firstName);
    // });
    if (!doctorAppointment) {
      res.status(404).send("appointment not found");
    } else {
      res.status(200).send(doctorAppointment);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const updateAppointment = async (req, res) => {
  const { id, status, consultationDate } = req.body.data;
  try {
    const updateAppointment = await db.Appointment.update(
      {
        status: status,
        consultationDate: consultationDate,
      },
      { where: { id: id } }
    );
    console.log(updateAppointment);
    if (!updateAppointment) {
      res.status(404).send("unable to update record");
    } else {
      res.status(200).send("updated success");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
module.exports = {
  createAppointemnt,
  getAllAppointment,
  getAppointmentByPatientId,
  getAppointmentByDoctorId,
  updateAppointment,
};
