const express = require("express");
const path = require("path");
const configViewEngine = (app) => {
  console.log("check >>>>", __dirname);
  // config template engine - khai bao luu file ejs muon lay
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");

  // config static file
  app.use(express.static(path.join("./src", "public"))); // Đường dẫn từ file public
};

module.exports = configViewEngine;
