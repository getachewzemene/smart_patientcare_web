"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Meeting extends Model {
    static associate(models) {
      this.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
        as: "meetingDoctor",
      });
      this.belongsTo(models.Patient, {
        foreignKey: "patientId",
        as: "meetingPatient",
      });
    }
  }
  Meeting.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },

    {
      sequelize,
      tableName: "meeting",
      freezeTableName: true,
    }
  );
  return Meeting;
};
