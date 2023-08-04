require('@babel/register');
const express = require('express');
const path = require('path');
const ssr = require('./middleware/ssr');

const app = express();

const PORT = 3000;

app.use(ssr);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const mainRouter = require('./routes/main.routes');
const themeRouter = require('./routes/theme.routes');
const authRouter = require("./routes/views/auth.routes");
const usersRouter = require("./routes/toplist.routes");

app.use('/', mainRouter);
app.use('/', themeRouter);
app.use("/auth", authRouter);
app.use("/toplist", usersRouter);

app.listen(PORT, () => {
  console.log(`Едем на ${PORT} порту`);
});