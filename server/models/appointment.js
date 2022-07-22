"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    // static associate(models) {
    //   this.belongsTo(models.Doctor);
    //   this.belongsTo(models.Patient);
    // }
  }
  Appointment.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      consultationDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },

    {
      sequelize,
      tableName: "appointment",
      freezeTableName: true,
    }
  );
  return Appointment;
};
