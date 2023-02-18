const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to Chirpn IT Solutions! Finally After 1.5 days we're running node js applicaiton on Heroku Throught github 🏆",
  });
});

app.get("/aws", (req, res) => {
  res.json({
    msg: "You took longer than we expected",
  });
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
