"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MedicalHistory extends Model {
    static associate(models) {
      // this.belongsTo(models.Doctor);
      // this.belongsTo(models.Patient);
      // this.belongsTo(models.Prescription);
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
    },

    {
      sequelize,
      tableName: "medicalHistory",
      freezeTableName: true,
    }
  );
  return MedicalHistory;
};
