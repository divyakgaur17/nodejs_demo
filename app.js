const express = require("express");

const app = express();
const port = normalizePort(process.env.PORT || 5000);
app.set('port', port);

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

app.listen(port, () => {
  console.log("listening on port " + port);
});
