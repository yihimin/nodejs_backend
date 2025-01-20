"use strict";

const logger = require("../../config/logger"); // logger 모듈을 가져옴
const User = require("../../models/User"); // User 클래스를 가져옴

const output = { // output 객체 생성
    hello : (req, res) => {
        logger.info(`GET / 200 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    
    login : (req, res) => {
        logger.info(`GET /login 200 "로그인 화면으로 이동"`);
        res.render("home/login");
    },

    register : (req, res) => {
        logger.info(`GET /register 200 "회원가입 화면으로 이동"`);
        res.render("home/register");
    },
};

const process = {
    login : async (req, res) => {
        const user = new User(req.body); // User 클래스의 인스턴스 생성
        const response = await user.login();
        logger.info(`POST /login 200 Response: ${response.success}, msg: ${response.msg}`);
        return res.json(response);
    },

    register : async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        logger.info(`POST /register 200 Response: ${response.success}, msg: ${response.msg}`);
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};