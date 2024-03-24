//const express = require("express");
import express from "express";
const app = express();
const port = 8080;

app.use((req, res, next) => {
  console.log("Middleware-ul nostru");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("Hello Test!");
});

app.get("/GoIT", (req, res) => {
  res.send("Hello GoIT!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
