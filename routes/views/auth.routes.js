const router = require("express").Router();
const RegisterForm = require("../../components/RegisterForm");
const {User} = require("../../db/models");

router.get("/register", (req, res) => {
  const document = res.renderComponent(RegisterForm, {title: "Register Page"});
  res.send(document);
});

router.post("/register", async (req, res) => {
  try {
    let user;
    const {name, password} = req.body;
    console.log(req.body);
    if (name.trim() && password.trim()) {
      console.log(user);
      user = await User.findOne({where: {name}});
      if (user) {
        res.json({message: "маои"});
        return;
      } else {
        user = await User.create({name, password});
        res.json({message: "ок"});
        return;
      }
    } else {
      res.json({message: "заполни меня"});
      return;
    }
  } catch ({message}) {
    res.json(message);
  }
});

module.exports = router;
