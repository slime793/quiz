"use strict";
const {Question} = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Question.bulkCreate([
      {
        description: "Где можно спрятаться от волка?",
        answer: "В цирке. Потому что волк в цирке не выступает",
        points: 666,
        theme_id: 1,
      },
      {
        description: "У какого слона нет хобота?",
        answer: "У шахматного",
        points: 2,
        theme_id: 1,
      },
      {
        description: "Какое животное лучший друг человека?",
        answer: "Собака",
        points: 1,
        theme_id: 1,
      },
      {
        description: "Какое животного имеет хобот",
        answer: "Не шахматный слон",
        points: 2,
        theme_id: 1,
      },
      {
        description: "Какой медведь обитает на севере",
        answer: "Белый",
        points: 3,
        theme_id: 1,
      },
      {
        description: "Вопрос 1 Тема 2",
        answer: 1,
        points: 1,
        theme_id: 2,
      },
      {
        description: "Вопрос 2 Тема 2",
        answer: 2,
        points: 2,
        theme_id: 2,
      },
      {
        description: "Вопрос 3 Тема 2",
        answer: 3,
        points: 3,
        theme_id: 2,
      },
      {
        description: "Вопрос 1 Тема 3",
        answer: 1,
        points: 1,
        theme_id: 3,
      },
      {
        description: "Вопрос 2 Тема 3",
        answer: 2,
        points: 2,
        theme_id: 3,
      },
      {
        description: "Вопрос 3 Тема 3",
        answer: 3,
        points: 3,
        theme_id: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Question.destroy({where: {}});
  },
};
