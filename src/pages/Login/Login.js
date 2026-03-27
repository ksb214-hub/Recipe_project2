// src/pages/Login/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

// 🔥 공통 컴포넌트
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import "./Login.css";

function Login() {
  // 상태 관리
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 로그인 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인:", id, pw);
  };

  return (
    <div className="login_container">

      {/* 🔥 Header는 Layout에서 처리됨 → 제거 */}

      {/* ================= MAIN ================= */}
      <main className="login_main">

        <div className="login_form">
          <h2 className="login_title">로그인</h2>

          <form onSubmit={handleSubmit}>

            {/* 아이디 */}
            <Input
              type="text"
              id="input-id"
              placeholder="Enter your email"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />

            {/* 비밀번호 */}
            <Input
              type="password"
              id="input-password"
              placeholder="Enter your password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />

            {/* 로그인 버튼 */}
            <Button type="submit">로그인</Button>

          </form>

          {/* ================= FOOTER ================= */}
          <div className="login_footer">

            <Link to="/find-id">아이디 찾기</Link>
            <Link to="/find-pw">비밀번호 찾기</Link>
            <Link to="/join">회원가입</Link>

          </div>

        </div>

      </main>
    </div>
  );
}

export default Login;