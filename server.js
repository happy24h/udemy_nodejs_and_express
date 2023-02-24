const express = require("express"); // common js
// import express from "express"; // es module

const app = express(); // app express
const port = 8080; // port

// khai báo route
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
