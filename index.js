const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(cors())
app.use(express.json());

var slackUsername = "String";
var backend = true;
var age = 1;
var bio = "String";

const getData = {
    slackUsername: typeof slackUsername,
    backend: typeof backend,
    age: typeof age,
    bio: typeof bio,
  };

app.get("/send", (req, res) => {
  res.send(getData);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
