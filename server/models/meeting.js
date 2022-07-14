"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Meeting extends Model {
    static associations(models) {
      Meeting.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
        as: "doctor",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
      Meeting.belongsTo(models.Patient, {
        foreignKey: "patientId",
        as: "patient",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Meeting.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hostId: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
          model: "doctor",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      patientId: {
        type: DataTypes.STRING,
        allowNull: true,
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
      tableName: "meeting",
      freezeTableName: true,
    }
  );
  return Meeting;
};
