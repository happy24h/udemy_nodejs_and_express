// import express from "express"; // es module
const express = require("express"); // common js

const path = require("path"); // commonjs

const app = express(); // app express
const port = 8080; // port

// config template engine - khai bao luu file ejs muon lay
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// khai báo route
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/content", (req, res) => {
  // res.send("This is page content");
  res.render("sample.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/detail", (req, res) => {
  res.send("<h2>This is page detail</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
