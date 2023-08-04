"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({Question}) {
      this.hasMany(Question, {foreignKey: "theme_id"});
    }
  }
  Theme.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Theme",
    }
  );
  return Theme;
};
