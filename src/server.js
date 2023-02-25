// import express from "express"; // es module
const express = require("express"); // common js

const path = require("path"); // commonjs
require("dotenv").config();

// console.log(">>> check env: ", process.env);

const app = express(); // app express
const port = process.env.PORT || 8888; // port
const hostname = process.env.HOST_NAME;

// config template engine - khai bao luu file ejs muon lay
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// config static file
app.use(express.static(path.join(__dirname, "public"))); // Đường dẫn từ file public

// khai báo route
app.get("/", function (req, res) {
  res.send("Hello World !");
});

app.get("/content", (req, res) => {
  // res.send("This is page content");
  res.render("content.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/detail", (req, res) => {
  res.send("<h2>This is page detail</h2>");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
