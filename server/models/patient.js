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
      Patient.belongsTo(models.User, {
        foreignKey: "userId",
        as: "patient",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
      userId: {
        type: DataTypes.STRING,
        references: {
          model: "user",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
