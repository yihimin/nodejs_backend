"use strict";

const db = require("../config/db");

class UserStorage {
    // 특정 ID로 사용자 정보를 가져오는 메서드
    static async getUserInfo(id) {
        const query = "SELECT * FROM users WHERE id = ?";
        try {
            const [rows] = await db.query(query, [id]); // Promise 기반 db.query 호출
            if (!Array.isArray(rows) || rows.length === 0) {
                throw new Error("존재하지 않는 아이디입니다.");
            }
            return rows[0]; // 첫 번째 결과 반환
        } catch (err) {
            console.error("Database error:", err.message, err.stack);
            throw new Error("사용자 정보를 가져오는 중 오류 발생");
        }
    }

    // 사용자 정보를 저장하는 메서드
    static async save(userInfo) {
        const query = "INSERT INTO users(id, name, pw) VALUES(?, ?, ?)";
        try {
            const [result] = await db.query(query, [userInfo.id, userInfo.name, userInfo.pw]);
            return { success: true, insertId: result.insertId };
        } catch (err) {
            console.error("Database error:", err.message, err.stack);
            throw new Error("사용자 정보를 저장하는 중 오류 발생");
        }
    }
}

module.exports = UserStorage;
