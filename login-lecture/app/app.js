"use strict";

const express = require("express");
const app = express();

// 라우터 가져오기
const home = require("./src/routes/home");

// 앱 설정
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

// 라우터 등록
app.use("/", home);

module.exports = app;