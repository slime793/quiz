'use strict';
const { User } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: 'Антон',
        points: 9,
        password: '123456',
      },
      {
        name: 'Andrey',
        points: 5,
        password: '123456',
      },
      {
        name: 'Valeron',
        points: 19,
        password: '123456',
      },
      {
        name: 'Rustam',
        points: 99,
        password: '123456',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await User.destroy({ where: {} });
  }
};
