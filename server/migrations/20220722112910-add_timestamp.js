"use strict";
const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        "admin",
        {
          id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
          },
          firstName: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          lastName: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          phone: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          role: {
            type: DataTypes.STRING,
            defaultValue: "admin",
            allowNull: false,
          },
          updatedAt: DataTypes.DATE,
          createdAt: DataTypes.DATE,
        },
        {
          hooks: {
            beforeCreate: function (admin, options, fn) {
              admin.createdAt = new Date();
              admin.updatedAt = new Date();
              fn(null, admin);
            },
            beforeUpdate: function (admin, options, fn) {
              admin.updatedAt = new Date();
              fn(null, admin);
            },
          },
        },
        {
          freezeTableName: true,
          timestamps: true,
          transaction,
        }
      );
      await queryInterface.createTable(
        "disease",
        {
          id: {
            type: Sequelize.DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
          },
          name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          catagory: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          precuation: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false,
          },
          updatedAt: DataTypes.DATE,
          createdAt: DataTypes.DATE,
        },
        {
          hooks: {
            beforeCreate: function (disease, options, fn) {
              disease.createdAt = new Date();
              disease.updatedAt = new Date();
              fn(null, disease);
            },
            beforeUpdate: function (disease, options, fn) {
              disease.updatedAt = new Date();
              fn(null, disease);
            },
          },
        },
        {
          freezeTableName: true,
          timestamps: true,
          transaction,
        }
      );
      await queryInterface.createTable(
        "symptom",
        {
          id: {
            type: Sequelize.DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
          },
          name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false,
          },
          updatedAt: DataTypes.DATE,
          createdAt: DataTypes.DATE,
        },
        {
          hooks: {
            beforeCreate: function (symptom, options, fn) {
              symptom.createdAt = new Date();
              symptom.updatedAt = new Date();
              fn(null, symptom);
            },
            beforeUpdate: function (symptom, options, fn) {
              symptom.updatedAt = new Date();
              fn(null, symptom);
            },
          },
        },
        {
          freezeTableName: true,
          timestamps: true,
          transaction,
        }
      );
      await queryInterface.createTable(
        "diseaseSymptom",
        {
          id: {
            type: Sequelize.DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
          },
          diseaseId: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
            references: {
              model: "disease",
              key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
          symptomId: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
            references: {
              model: "symptom",
              key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        },
        {
          freezeTableName: true,
          transaction,
        }
      );
      await queryInterface.createTable(
        "user",
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
          updatedAt: DataTypes.DATE,
          createdAt: DataTypes.DATE,
        },
        {
          hooks: {
            beforeCreate: function (user, options, fn) {
              user.createdAt = new Date();
              user.updatedAt = new Date();
              fn(null, user);
            },
            beforeUpdate: function (user, options, fn) {
              user.updatedAt = new Date();
              fn(null, user);
            },
          },
        },
        {
          freezeTableName: true,
          timestamps: true,
          transaction,
        }
      );
      await queryInterface.createTable(
        "doctor",
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
          updatedAt: DataTypes.DATE,
          createdAt: DataTypes.DATE,
        },
        {
          hooks: {
            beforeCreate: function (doctor, options, fn) {
              doctor.createdAt = new Date();
              doctor.updatedAt = new Date();
              fn(null, doctor);
            },
            beforeUpdate: function (doctor, options, fn) {
              doctor.updatedAt = new Date();
              fn(null, doctor);
            },
          },
        },
        {
          freezeTableName: true,
          timestamps: true,
          transaction,
        }
      );
      await queryInterface.createTable(
        "schedule",
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
          updatedAt: DataTypes.DATE,
          createdAt: DataTypes.DATE,
        },
        {
          hooks: {
            beforeCreate: function (schedule, options, fn) {
              schedule.createdAt = new Date();
              schedule.updatedAt = new Date();
              fn(null, schedule);
            },
            beforeUpdate: function (schedule, options, fn) {
              schedule.updatedAt = new Date();
              fn(null, schedule);
            },
          },
        },
        {
          freezeTableName: true,
          timestamps: true,
          transaction,
        }
      );

      await queryInterface.createTable(
        "patient",
        {
          id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
          },
          weight: {
            type: DataTypes.DOUBLE,
            allowNull: false,
          },
          bloodGroup: {
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
          updatedAt: DataTypes.DATE,
          createdAt: DataTypes.DATE,
        },
        {
          hooks: {
            beforeCreate: function (patient, options, fn) {
              patient.createdAt = new Date();
              patient.updatedAt = new Date();
              fn(null, patient);
            },
            beforeUpdate: function (patient, options, fn) {
              patient.updatedAt = new Date();
              fn(null, patient);
            },
          },
        },
        {
          freezeTableName: true,
          timestamps: true,
          transaction,
        }
      );
      await queryInterface.createTable(
        "appointment",
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
          updatedAt: DataTypes.DATE,
          createdAt: DataTypes.DATE,
        },
        {
          hooks: {
            beforeCreate: function (appointment, options, fn) {
              appointment.createdAt = new Date();
              appointment.updatedAt = new Date();
              fn(null, appointment);
            },
            beforeUpdate: function (appointment, options, fn) {
              appointment.updatedAt = new Date();
              fn(null, appointment);
            },
          },
        },
        {
          freezeTableName: true,
          timestamps: true,
          transaction,
        }
      );
      await queryInterface.createTable(
        "meeting",
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
          doctorId: {
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
          updatedAt: DataTypes.DATE,
          createdAt: DataTypes.DATE,
        },
        {
          hooks: {
            beforeCreate: function (meeting, options, fn) {
              meeting.createdAt = new Date();
              meeting.updatedAt = new Date();
              fn(null, meeting);
            },
            beforeUpdate: function (meeting, options, fn) {
              meeting.updatedAt = new Date();
              fn(null, meeting);
            },
          },
        },
        {
          freezeTableName: true,
          transaction,
        }
      );
      await queryInterface.createTable(
        "prescription",
        {
          id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
          },
          medicineName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          dosage: {
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
          updatedAt: DataTypes.DATE,
          createdAt: DataTypes.DATE,
        },
        {
          hooks: {
            beforeCreate: function (prescription, options, fn) {
              prescription.createdAt = new Date();
              prescription.updatedAt = new Date();
              fn(null, prescription);
            },
            beforeUpdate: function (prescription, options, fn) {
              prescription.updatedAt = new Date();
              fn(null, prescription);
            },
          },
        },
        {
          freezeTableName: true,
          timestamps: true,
          transaction,
        }
      );
      await queryInterface.createTable(
        "medicalHistory",
        {
          id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
          },
          compliant: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          investigationResult: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          treatment: {
            type: DataTypes.TEXT,
            allowNull: true,
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
          prescriptionId: {
            type: DataTypes.STRING,
            references: {
              model: "prescription",
              key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
          updatedAt: DataTypes.DATE,
          createdAt: DataTypes.DATE,
        },
        {
          hooks: {
            beforeCreate: function (medicalHistory, options, fn) {
              medicalHistory.createdAt = new Date();
              medicalHistory.updatedAt = new Date();
              fn(null, medicalHistory);
            },
            beforeUpdate: function (medicalHistory, options, fn) {
              medicalHistory.updatedAt = new Date();
              fn(null, medicalHistory);
            },
          },
        },
        {
          freezeTableName: true,
          transaction,
        }
      );
      await queryInterface.createTable(
        "rating",
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
          updatedAt: DataTypes.DATE,
          createdAt: DataTypes.DATE,
        },
        {
          hooks: {
            beforeCreate: function (rating, options, fn) {
              rating.createdAt = new Date();
              rating.updatedAt = new Date();
              fn(null, rating);
            },
            beforeUpdate: function (rating, options, fn) {
              rating.updatedAt = new Date();
              fn(null, rating);
            },
          },
        },
        {
          freezeTableName: true,
          timestamps: true,
          transaction,
        }
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("admin");
    await queryInterface.dropTable("diseaseSymptom");
    await queryInterface.dropTable("symptom");
    await queryInterface.dropTable("disease");
    await queryInterface.dropTable("schedule");
    await queryInterface.dropTable("appointment");
    await queryInterface.dropTable("rating");
    await queryInterface.dropTable("meeting");
    await queryInterface.dropTable("medicalHistory");
    await queryInterface.dropTable("prescription");
    await queryInterface.dropTable("doctor");
    await queryInterface.dropTable("patient");
    await queryInterface.dropTable("user");
  },
};
