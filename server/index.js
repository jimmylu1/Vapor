const express = require("express");
const parser = require("body-parser");
const app = express();
const port = 3001;
const db = require("../db");

app.use(express.static(__dirname + "/../public"));

app.get("/steam1", (req, res) => {
  db.getAll((err, data) => {
    if (err) {
      console.log("ERROR: ", err);
      res.status(400);
    } else {
      console.log("Data received from db: ", data);
      res.status(200);
      res.send(data);
      res.end();
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// app.get("/nav_bar", (req, res) => {
//   console.log("server connected");
// });
