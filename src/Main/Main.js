// src/Main/Main.js
import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      {/* 🔹 NAV */}
      <nav className="zero-naeng-fe_nav">
        <ul>
            {/* 로고 */}
            <li>
                <Link className="zero-naeng-fe_link" to="/">
                zero-naeng-fe
                </Link>
            </li>

            {/* 로그인 */}
            <li>
                <Link className="zero-naeng-fe_login_btn" to="/login">
                로그인
                </Link>
            </li>

            {/* 검색 */}
            <li>
                <Link className="zero-naeng-fe_search" to="/search">
                검색
                </Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default Main;