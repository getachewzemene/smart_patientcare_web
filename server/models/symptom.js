"use strict";
const { Model } = require("sequelize");
const disease = require("./disease");
module.exports = (sequelize, DataTypes) => {
  class Symptom extends Model {
    static associate(models) {
      Symptom.belongsToMany(models.Disease, {
        through: models.DiseaseSymptom,
        as: "disease",
      });
    }
  }
  Symptom.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      symptomName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },

    {
      sequelize,
      tableName: "symptom",
      freezeTableName: true,
    }
  );
  return Symptom;
};
