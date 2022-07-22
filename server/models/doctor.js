"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      this.hasMany(models.Appointment, {
        foreignKey: "doctorId",
        as: "doctorAppointment",
      });
      this.hasMany(models.Schedule, {
        foreignKey: "doctorId",
        as: "doctorSchedule",
      });
      this.hasMany(models.Prescription, {
        foreignKey: "doctorId",
        as: "doctorPrescription",
      });
      this.hasMany(models.MedicalHistory, {
        foreignKey: "doctorId",
        as: "doctorMedicalHistory",
      });
      this.hasOne(models.Meeting, {
        foreignKey: "doctorId",
        as: "doctorMeeting",
      });
      this.hasMany(models.Rating, {
        foreignKey: "doctorId",
        as: "doctorRating",
      });
      // this.belongsTo(models.User);
    }
  }
  Doctor.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      specialization: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagePath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },

    {
      sequelize,
      tableName: "doctor",
      freezeTableName: true,
    }
  );
  return Doctor;
};
