"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate(models) {
      this.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
        as: "ratingDoctor",
      });
      this.belongsTo(models.Patient, {
        foreignKey: "patientId",
        as: "ratingPatient",
      });
    }
  }
  Rating.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },

    {
      sequelize,
      tableName: "rating",
      freezeTableName: true,
    }
  );
  return Rating;
};
