"use strict";

const express = require("express");
const router = express.Router(); // 라우터 생성
const ctrl = require("./home.ctrl");

// 홈 화면 라우트
router.get("/", ctrl.hello);

// 로그인 화면 라우트
router.get("/login", ctrl.login);

// 라우터 내보내기
module.exports = router;