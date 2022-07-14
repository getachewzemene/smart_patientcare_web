"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associations(models) {
      Doctor.hasMany(models.Appointment, {
        foreignKey: "doctorId",
      });
      Doctor.hasMany(models.Schedule, {
        foreignKey: "doctorId",
      });
      Doctor.hasMany(models.Prescription, {
        foreignKey: "doctorId",
      });
      Doctor.hasMany(models.MedicalHistory, {
        foreignKey: "doctorId",
      });
      Doctor.hasOne(models.Meeting, {
        foreignKey: "doctorId",
      });
      Doctor.hasMany(models.Rating, {
        foreignKey: "doctorId",
      });
    }
  }
  Doctor.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DOB: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      specialization: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "doctor",
        allowNull: false,
      },
      imagePath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updatedAt: {
        type: "TIMESTAMP",
        defaultValue: sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
        allowNull: false,
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
