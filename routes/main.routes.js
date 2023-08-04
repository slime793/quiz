const router = require("express").Router();
const Main = require("../components/Main");
const {User} = require("../db/models");

router.get("/", async (req, res) => {
  try {
    const user = await User.findOne({where: {id: 1}});
    res.app.locals.user = user;
    const document = res.renderComponent(Main, {title: "Main"});
    res.end(document);
  } catch ({message}) {
    res.json(message);
  }
});

module.exports = router;
