const router = require("express").Router();
const {Question} = require("../db/models");
const { Theme } = require('../db/models');
const ThemePage = require('../components/ThemePage');

router.get("/:themeId", async (req, res) => {
  try {
    const {themeId} = req.params;
    const themeName = await Theme.findOne({where: {id: themeId}});
    const questions = await Question.findAll({ where: { theme_id: themeId } });
    const document = res.renderComponent(ThemePage, {title: themeName.name, questions});
    res.send(document);
  } catch ({message}) {
    res.json(message);
  }
});

module.exports = router;
