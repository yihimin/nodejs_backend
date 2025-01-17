"use strict";

const express = require("express");
const router = express.Router(); // 라우터 생성
const ctrl = require("./home.ctrl");

// 홈 화면 라우트
router.get("/", ctrl.output.hello);

// 로그인 화면 라우트
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);


// 라우터 내보내기
module.exports = router;
