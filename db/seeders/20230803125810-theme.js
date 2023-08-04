'use strict';
const { Theme } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Theme.bulkCreate([
      {
        name: 'Winx',
        cover: 'https://images.justwatch.com/poster/238911594/s592/winx-club'
      },
      {
        name: 'The office',
        cover: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/7bbd225f-e6db-4326-b600-1ac294cf9d99/600x900'
      },
      {
        name: 'Animals',
        cover: 'https://cdn1.byjus.com/wp-content/uploads/2022/08/Animals-Names-Explore-List-of-100-Names-in-English.png'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await Theme.destroy({ where: {} });
  }
};
