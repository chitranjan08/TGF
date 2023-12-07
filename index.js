const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const connection = require("./db/db.mysql");
const mongodb = require("./db/db.mongo");
const path = require("path");
var cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection.connect(function (err) {
  if (err) throw err;
  console.log("MySql Connected!");
});

mongodb();
app.use("/User", require("./api/user/userroutes/routes.user.js"));
app.use("/Game", require("./api/game/gameroutes/routes.games.js"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// module.exports = app;
