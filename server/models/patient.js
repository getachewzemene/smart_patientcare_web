"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associations(models) {
      Patient.hasMany(models.Appointment, {
        foreignKey: "patientId",
      });
      Patient.hasMany(models.Prescription, {
        foreignKey: "patientId",
      });
      Patient.hasMany(models.MedicalHistory, {
        foreignKey: "patientId",
      });
      Patient.hasMany(models.Meeting, {
        foreignKey: "patientId",
      });
      Patient.hasOne(models.Rating, {
        foreignKey: "patientId",
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
      weight: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "guest",
        allowNull: false,
      },
      bloodGroup: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.TEXT,
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
      tableName: "patient",
      freezeTableName: true,
    }
  );
  return Patient;
};
