const router = require("express").Router();
const {User} = require("../db/models");
const Toplist =  require('../components/Toplist')

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    const document = res.renderComponent(Toplist, {
      title: "Toplist Page",
      users,
    });
    console.log(document,'==========');
    res.send(document);
  } catch ({message}) {
    res.json(message);
  }
});

module.exports = router;
