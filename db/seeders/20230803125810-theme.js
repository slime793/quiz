'use strict';
const { Theme } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Theme.bulkCreate([
      {
        name: 'Тема 1'
      },
      {
        name: 'Тема 2'
      },
      {
        name: 'Тема 3'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await Theme.destroy({ where: {} });
  }
};
