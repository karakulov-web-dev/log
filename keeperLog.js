const express = require("express");
const app = express();
app.use(express.json({ type: "*/*" }));

let logs = [];

app.use("/log/send", function(req, res) {
  console.log(req.body);
  if (req.query.text) {
    logs.push(req.query.text);
  } else if (req.body.text) {
    logs.push(req.body.text);
  }
  res.send(logs);
});

app.get("/log/get", function(req, res) {
  res.send(logs);
});

app.get("/log/clear", function(req, res) {
  res.send((logs = []));
});

app.listen(8007);
