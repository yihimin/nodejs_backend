"use strict";

const express = require("express");
const router = express.Router(); // 라우터 생성

// 홈 화면 라우트
router.get("/", (req, res) => {
    res.render("home/index");
});

// 로그인 화면 라우트
router.get("/login", (req, res) => {
    res.render("home/login");
});

// 라우터 내보내기
module.exports = router;
