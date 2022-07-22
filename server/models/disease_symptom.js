"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DiseaseSymptom extends Model {}
  DiseaseSymptom.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      diseaseId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      symptomId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },

    {
      sequelize,
      tableName: "diseaseSymptom",
      freezeTableName: true,
    }
  );
  return DiseaseSymptom;
};
