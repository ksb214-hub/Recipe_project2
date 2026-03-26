import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom"; // 🔥 추가

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id, pw);
  };

  return (
    <div className="container">
      {/* NAV */}
      <nav className="nav">
        {/* 🔥 a → Link 변경 */}
        <Link to="/" className="logo">
          zero-naeng-fe
        </Link>
      </nav>

      {/* MAIN */}
      <main className="main">
        <div className="login_form">
          <form onSubmit={handleSubmit}>
            
            {/* login_box */}
            <div className="login_box">
              <input
                type="text"
                id="input-id"
                placeholder="Enter your email"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />

              <input
                type="password"
                id="input-password"
                name="password"
                placeholder="Enter your password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
              />
            </div>

            {/* btn_login */}
            <div className="btn_login">
              <input
                type="submit"
                name="login-button"
                value="로그인"
              />
            </div>

          </form>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <ul className="find_id">
          
          {/* 🔥 아이디 찾기 */}
          <li>
            <Link
              to="/find-id"
              id="pwinquiry"
              className="find_text"
            >
              아이디 찾기
            </Link>
          </li>

          {/* 🔥 비밀번호 찾기 */}
          <li>
            <Link
              to="/find-pw"
              id="idinquiry"
              className="find_text"
            >
              비밀번호 찾기
            </Link>
          </li>

          {/* 🔥 회원가입 */}
          <li>
            <Link
              to="/signup"
              id="join"
              className="find_text"
            >
              회원가입
            </Link>
          </li>

        </ul>
      </footer>
    </div>
  );
}

export default Login;