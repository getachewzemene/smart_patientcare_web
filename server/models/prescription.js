"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Prescription extends Model {
    static associate(models) {
      this.hasOne(models.MedicalHistory, {
        foreignKey: "prescriptionId",
        as: "PrescriptionHistory",
      });
      // this.belongsTo(models.Doctor);
      // this.belongsTo(models.Patient);
    }
  }
  Prescription.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      medicineName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      dosage: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },

    {
      sequelize,
      tableName: "prescription",
      freezeTableName: true,
    }
  );
  return Prescription;
};
