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
          createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal(
              "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
            ),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
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
          createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal(
              "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
            ),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
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
          createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal(
              "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
            ),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
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
          createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal(
              "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
            ),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
          transaction,
        }
      );
      await queryInterface.createTable(
        "doctor",
        {
          id: {
            type: Sequelize.DataTypes.STRING,
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
          gender: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          DOB: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
          },
          specialization: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          role: {
            type: Sequelize.DataTypes.STRING,
            defaultValue: "doctor",
            allowNull: false,
          },
          imagePath: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
          },
          createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal(
              "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
            ),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
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
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal(
              "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
            ),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
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
          weight: {
            type: DataTypes.DOUBLE,
            allowNull: false,
          },
          role: {
            type: DataTypes.STRING,
            defaultValue: "guest",
            allowNull: false,
          },
          bloodGroup: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          address: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal(
              "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
            ),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
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
          createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal(
              "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
            ),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
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
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal(
              "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
            ),
            allowNull: false,
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
          createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal(
              "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
            ),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
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
          createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal(
              "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
            ),
            allowNull: false,
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
          createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal(
              "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
            ),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
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
  },
};
