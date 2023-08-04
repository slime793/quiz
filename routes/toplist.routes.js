const router = require("express").Router();
const Toplist = require("../components/Toplist");
const {User} = require("../db/models");

router.get("/list", async (req, res) => {
  try {
    const users = await User.findAll({order: [["points", "DESC"]]});
    const document = res.renderComponent(Toplist, {
      title: "Toplist Page",
      users,
    });
    res.send(document);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
