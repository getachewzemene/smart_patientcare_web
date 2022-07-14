"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associations(models) {
      Rating.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
        as: "doctor",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
      Rating.belongsTo(models.Patient, {
        foreignKey: "patientId",
        as: "patient",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
      tableName: "rating",
      freezeTableName: true,
    }
  );
  return Rating;
};
