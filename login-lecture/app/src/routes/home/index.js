"use strict";

const express = require("express");
const router = express.Router(); // 라우터 생성
const ctrl = require("./home.ctrl");

// 홈 화면 라우트
router.get("/", ctrl.output.hello);

// 로그인 화면 라우트
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

// 라우터 내보내기
module.exports = router;
