"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const accessLogStream = require("./src/config/log");

const app = express();
dotenv.config();

// 라우팅
const home = require("./src/routes/home");
const logger = require("./src/config/logger");
logger.info("앱 실행");

// 앱 설정
app.set("views", "./src/views");
app.set("view engine", "ejs");

// 미들웨어
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(morgan("common", { stream: accessLogStream }));

// 라우터 등록
app.use("/", home);


module.exports = app;