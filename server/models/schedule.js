"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associations(models) {
      Schedule.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
        as: "doctor",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Schedule.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      workingDays: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      doctorId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "doctor",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
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
      tableName: "schedule",
      freezeTableName: true,
    }
  );
  return Schedule;
};
