"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({Theme}) {
      this.belongsTo(Theme, {foreignKey: "theme_id"});
    }
  }
  Question.init(
    {
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      points: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      theme_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Themes",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
