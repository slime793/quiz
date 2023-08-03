const router = require('express').Router();
const { Theme } = require('../db/models');
const Main = require('../components/Main');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll();
    const document = res.renderComponent(Main, { title: 'Main page', themes});
    res.send(document);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;