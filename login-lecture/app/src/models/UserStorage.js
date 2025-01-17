"use strict";

const db = require("../config/db");

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
    }

    static async getUserInfo(id) {
        try {
            const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
            if (!Array.isArray(rows) || rows.length === 0) {
                throw new Error("존재하지 않는 아이디입니다.");
            }
            return rows[0];
        } catch (err) {
            console.error("Database error:", err.message, err.stack);
            throw new Error("사용자 정보를 가져오는 중 오류 발생");
        }
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
    }
}

module.exports = UserStorage;
