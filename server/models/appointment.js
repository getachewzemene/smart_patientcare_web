"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associations(models) {
      Appointment.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
        as: "doctor",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
      Appointment.belongsTo(models.Patient, {
        foreignKey: "patientId",
        as: "patient",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Appointment.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      consultationDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      doctorId: {
        type: DataTypes.STRING,
        references: {
          model: "doctor",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      patientId: {
        type: DataTypes.STRING,
        references: {
          model: "patient",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
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
      tableName: "appointment",
      freezeTableName: true,
    }
  );
  return Appointment;
};
