'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      validation_str: {
        type: Sequelize.STRING,
      },
      resetToken: {
        type: Sequelize.STRING,
      },
      resetTokenExpires: {
        type: Sequelize.DATE
      },
      passwordReset: {
        type: Sequelize.DATE
      },
      role: {
        type: Sequelize.STRING,
      },
      email_validated: { 
        type: Sequelize.BOOLEAN,
      },
      hasCompany: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};