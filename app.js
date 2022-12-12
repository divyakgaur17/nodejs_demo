const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to the world of AWS! Now Finally After 2.5 days we're running node js applicaiton on docker through jenkins. 🏆 && New Update 2",
  });
});

app.get("/aws", (req, res) => {
  res.json({
    msg: "You took longer than we expected",
  });
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
