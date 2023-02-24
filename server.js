const express = require("express"); // common js
// import express from "express"; // es module

const app = express(); // app express
const port = 8080; // port

// khai báo route
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/content", (req, res) => {
  res.send("This is page content");
});

app.get("/detail", (req, res) => {
  res.send("<h2>This is page detail</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
