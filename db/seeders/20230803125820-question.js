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
        description: "А с чьей мамой встречался Майкл?",
        answer: "Пэм",
        points: 1,
        theme_id: 2,
      },
      {
        description: "Что на своей ферме выращивал Дуайт?",
        answer: "Свеклу",
        points: 2,
        theme_id: 2,
      },
      {
        description: "Какую компанию хотел основать Майкл?",
        answer: "Бумажную",
        points: 3,
        theme_id: 2,
      },
      {
        description: "Носил ли Стэнли усы?",
        answer: "Да",
        points: 1,
        theme_id: 2,
      },
      {
        description: "Кто устроил пожар в офисе? ",
        answer: "Дуайт",
        points: 2,
        theme_id: 2,
      },
      {
        description: "Какие основные способности имеют Флора?",
        answer: "Флора",
        points: 3,
        theme_id: 3,
      },
      {
        description: "Какое магическое училище посещают главные героини? ",
        answer: "Школа Алфеи",
        points: 3,
        theme_id: 3,
      },
      {
        description: "У кого из героинь есть питомец по имени Кико?",
        answer: "Блум",
        points: 3,
        theme_id: 3,
      },
      {
        description: "Где находится школа Алфеи, где обучаются героини?",
        answer: "На планете Магикс",
        points: 3,
        theme_id: 3,
      },
      {
        description:
          "Как зовут принца из Дома Эраклиона, который влюблен в Текну?",
        answer: "Тимми",
        points: 3,
        theme_id: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Question.destroy({where: {}});
  },
};
