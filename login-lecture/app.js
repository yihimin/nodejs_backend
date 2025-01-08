"use strict";

const express = require("express");
const app = express();

// 라우터 가져오기
const home = require("./routes/home");

// 앱 설정
app.set("views", "./views");
app.set("view engine", "ejs");

// 라우터 등록
app.use("/", home);

module.exports = app;