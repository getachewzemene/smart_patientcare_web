"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associations(models) {
      Doctor.hasMany(models.Appointment, {
        foreignKey: "doctorId",
      });
      Doctor.hasMany(models.Schedule, {
        foreignKey: "doctorId",
      });
      Doctor.hasMany(models.Prescription, {
        foreignKey: "doctorId",
      });
      Doctor.hasMany(models.MedicalHistory, {
        foreignKey: "doctorId",
      });
      Doctor.hasOne(models.Meeting, {
        foreignKey: "doctorId",
      });
      Doctor.hasMany(models.Rating, {
        foreignKey: "doctorId",
      });
      Doctor.belongsTo(models.User, {
        foreignKey: "userId",
        as: "doctor",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      });
    }
  }
  Doctor.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      specialization: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagePath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userId: {
        type: DataTypes.STRING,
        references: {
          model: "user",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },

    {
      sequelize,
      tableName: "doctor",
      freezeTableName: true,
    }
  );
  return Doctor;
};
