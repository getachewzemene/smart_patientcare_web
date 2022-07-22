"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Disease extends Model {
    static associate(models) {
      this.belongsToMany(models.Symptom, {
        through: models.DiseaseSymptom,
        as: "symptom",
      });
    }
  }
  Disease.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      diseaseName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precuation: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },

    {
      sequelize,
      tableName: "disease",
      freezeTableName: true,
    }
  );
  return Disease;
};
