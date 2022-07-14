"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Disease extends Model {
    static associations(models) {
      Disease.belongsToMany(models.Symptom, {
        foreignKey: "diseaseId",
        as: "symptoms",
        through: "diseaseSymptom",
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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      catagory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precuation: {
        type: DataTypes.TEXT,
        allowNull: false,
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
      tableName: "disease",
      freezeTableName: true,
    }
  );
  return Disease;
};