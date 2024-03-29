"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.Doctor, { foreignKey: "userId", as: "userDoctor" });
      this.hasOne(models.Patient, {
        foreignKey: "userId",
        as: "userPatient",
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DOB: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: "geust",
        allowNull: false,
      },
    },

    {
      sequelize,
      tableName: "user",
      freezeTableName: true,
    }
  );
  return User;
};
