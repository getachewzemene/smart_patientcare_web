"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      this.hasMany(models.Appointment, {
        foreignKey: "patientId",
        as: "patientAppointment",
      });
      this.hasMany(models.Prescription, {
        foreignKey: "patientId",
        as: "patientPrescription",
      });
      this.hasMany(models.MedicalHistory, {
        foreignKey: "patientId",
        as: "patientMedicalHistory",
      });
      this.hasMany(models.Meeting, {
        foreignKey: "patientId",
        as: "patientMeeting",
      });
      this.hasOne(models.Rating, {
        foreignKey: "patientId",
        as: "patientRating",
      });
    }
  }
  Patient.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      weight: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      bloodGroup: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "patient",
      freezeTableName: true,
    }
  );
  return Patient;
};
