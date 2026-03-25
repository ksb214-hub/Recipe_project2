// src/Main/Main.js
// src/Main/Main.js
import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      {/* NAV */}
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

      {/* MAIN */}
      <main className="con">
        <div id="tab">
          <ul>
            {/* 레시피 */}
            <li className="on">
              <a href="#">레시피</a>
            </li>

            {/* 냉장고 재료 */}
            <li>
              <a href="#">냉장고 재료</a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Main;