require('@babel/register');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const ReactDOMserver = require('react-dom/server');
const React = require('react');
const Home = require('./components/Home');
const Form = require('./components/Form');

const PORT = 300;

app.use(ssr);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Негор работает за ${PORT}$`);
});
