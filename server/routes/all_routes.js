const express = require("express");
const adminRoute = require("./admin_route");
const authRoute = require("./auth_route");
const doctorRoute = require("./doctor_route");
const patientRoute = require("./patient_route");
const predictDiseaseRoute = require("./predict_disease_route");
const appointmentRoute = require("./appointment_route");
const diseaseRoute = require("./disease_route");
const rtcTokenGeneratorRoute = require("./rtc_token_genartor_route");
const allRoute = (app) => {
  app.use("/images", express.static("./images"));
  app.use("/admin", adminRoute);
  app.use("/doctor", doctorRoute);
  app.use("/patient", patientRoute);
  app.use("/disease", diseaseRoute);
  app.use(authRoute);
  app.use(predictDiseaseRoute);
  app.use("/appointment", appointmentRoute);
  app.use(rtcTokenGeneratorRoute);
};

module.exports = allRoute;
