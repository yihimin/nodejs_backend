"use strict";

const User = require("../../models/User"); // User 클래스를 가져옴

const output = {
    hello : (req, res) => {
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login : (req, res) => {
        const user = new User(req.body); // User 클래스의 인스턴스 생성
        const response = user.login();
        return res.json(response);
        // const id = req.body.id,
        //       pw = req.body.pw;

        // const users = UserStorage.getUsers("id", "pw");

        // const response = {};
        // if (users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if (users.pw[idx] === pw) {
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다.";
        // return res.json(response);
    },
};

module.exports = {
    output,
    process,
};