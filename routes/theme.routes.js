const router = require("express").Router();
const {Question} = require("../db/models");
const {Theme} = require("../db/models");
const ThemePage = require("../components/ThemePage");

router.get("/:themeId", async (req, res) => {
  try {
    const {themeId} = req.params;
    const themeName = await Theme.findOne({where: {id: themeId}});
    const questions = await Question.findAll({where: {theme_id: themeId}});
    const document = res.renderComponent(ThemePage, {
      title: themeName.name,
      questions,
    });
    res.send(document);
  } catch ({message}) {
    res.json(message);
  }
});

router.put("/:themeId", async (req, res) => {
  try {
    const {userAnswer, counter} = req.body;
    const {themeId} = req.params;
    const result = await Question.findAll({where: {theme_id: themeId}});
    if (result[counter + 1]) {
      if (result.find(ans => ans.answer === userAnswer)) {
        res.json({answer: result[counter + 1], message: "true"});
        return;
      } else {
        res.json({answer: result[counter + 1], message: "false"});
      return;
      }
    } else {
      res.json({message: "end"});
        return;
    }
  } catch ({message}) {
    res.json(message);
  }
});

module.exports = router;
