require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
let jsonData = {
  name: "mihir",
  wife: "supriya",
};
console.log(process.env.PORT);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("hi,Hitesh Sir");
});
app.get("/login", (req, res) => {
  res.send("<h1>hello</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>Hi,I am back</h2>");
});
app.get("/jsondata", (req, res) => {
  res.json(jsonData);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
