const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

var slackUsername = "m_jigah";
var backend = true;
var age = 21;
var bio = "Hi, I am Jigah  Miracle, a backend Developer!";

const getData = {
  slackUsername,
  backend,
  age,
  bio,
};

app.get("/favicon.ico", function (req, res) {
  res.status(204);
  res.end();
});

app.get("/", (req, res) => {
  res.json(getData);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
