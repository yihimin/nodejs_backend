"use strict";

const fs = require("fs").promises;

class UserStorage {

    static #getUsers(data, fields) {
        const users = JSON.parse(data);
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(...fields) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUsers(data, fields);
            })
            .catch(console.error);
    }

    static getUserInfo(id) {
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static async save(userInfo) {
        try {
            const data = await fs.readFile("./src/databases/users.json", "utf-8");
            const users = JSON.parse(data);

            if (users.id.includes(userInfo.id)) {
                throw "이미 존재하는 아이디입니다.";
            }

            // 기존 데이터에 새 유저 정보 추가
            users.id.push(userInfo.id);
            users.name.push(userInfo.name);
            users.pw.push(userInfo.pw);

            // 파일에 저장
            await fs.writeFile("./src/databases/users.json", JSON.stringify(users, null, 2), "utf-8");
            return { success: true };
        } catch (error) {
            console.error("Error saving user:", error);
            throw error;
        }
    }
}

module.exports = UserStorage;
