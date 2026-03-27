import { Link } from "react-router-dom";
import { useState } from "react";
import "./FindPw.css";

function FindPw() {
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("아이디:", userId);
  };

  return (
    <div>

      {/* ================= HEADER ================= */}
      <header className="header">
        <nav className="nav">
          <div className="inner">

            {/* 로고 */}
            <div className="logo">
              <h1>
                <Link to="/" className="logo_link">
                  zero-naeng-fe
                </Link>
              </h1>
            </div>

            {/* 로그인 이동 */}
            <h2 className="name">
              <Link to="/login" className="login_link">
                로그인
              </Link>
            </h2>

          </div>
        </nav>
      </header>

      {/* ================= MAIN ================= */}
      <main className="main">

        {/* 제목 */}
        <h3 className="main_title">비밀번호 찾기</h3>

        {/* 설명 */}
        <div className="description">
          <button type="button">
            <span className="margin-right">아이디를 입력하세요</span>
          </button>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit}>

          {/* 입력 */}
          <div className="Label-input">
            <div className="Label-input_in">

              <label className="label">
                아이디
              </label>

              <input
                className="id_input"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="아이디 입력"
              />

            </div>
          </div>

          {/* 버튼 */}
          <div className="form-main-button">
            <button className="Button-button" type="submit">
              다음
            </button>
          </div>

        </form>

      </main>

    </div>
  );
}

export default FindPw;