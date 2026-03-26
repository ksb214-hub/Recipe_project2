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
          {/* 왼쪽 */}
          <div className="nav_left">
            <li>
              <Link className="zero-naeng-fe_link" to="/">
                zero-naeng-fe
              </Link>
            </li>
          </div>

          {/* 오른쪽 */}
          <div className="nav_right">
            <li>
              <Link className="zero-naeng-fe_login_btn" to="/login">
                로그인
              </Link>
            </li>
            <li>
              <Link className="zero-naeng-fe_search" to="/search">
                검색
              </Link>
            </li>
          </div>
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