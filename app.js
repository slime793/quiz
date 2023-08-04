require("@babel/register");

const express = require("express");
const ssr = require("./middleware/ssr");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(ssr);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const mainRouter = require("./routes/main.routes");
const usersRouter = require("./routes/toplist.routes");
const authRouter = require("./routes/views/auth.routes");

app.use("/", mainRouter);
app.use("/auth", authRouter);

app.use("/toplist", usersRouter);

app.listen(PORT, () => {
  console.log(`Негор работает за ${PORT}$`);
});
