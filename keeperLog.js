const express = require("express");
const app = express();
app.use(express.json());

let logs = [];

app.get("/log/send", function(req, res) {
  logs.push(req.query.text);
  res.send(logs);
});

app.get("/log/get", function(req, res) {
  res.send(logs);
});

app.get("/log/clear", function(req, res) {
  res.send((logs = []));
});

app.listen(8007);
