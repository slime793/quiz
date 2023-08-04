"use strict";
const {Theme} = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Theme.bulkCreate([
      {
        name: "Животные",
        description: "Тема про животных",
      },
      {
        name: "Тема 2",
        description: "",
      },
      {
        name: "Тема 3",
        description: "",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Theme.destroy({where: {}});
  },
};
