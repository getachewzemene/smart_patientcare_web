"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MedicalHistory extends Model {
    static associations(models) {
      MedicalHistory.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
        as: "doctor",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
      MedicalHistory.belongsTo(models.Patient, {
        foreignKey: "patientId",
        as: "patient",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
      MedicalHistory.belongsTo(models.Prescription, {
        foreignKey: "prescriptionId",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  MedicalHistory.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      compliant: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      investigationResult: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      treatment: {
        type: DataTypes.TEXT,
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
      prescriptionId: {
        type: DataTypes.STRING,
        references: {
          model: "prescription",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
      tableName: "medicalHistory",
      freezeTableName: true,
    }
  );
  return MedicalHistory;
};
