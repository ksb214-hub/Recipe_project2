// React 기본 훅(useState) import
import React, { useState } from "react";

// CSS 파일 import (스타일 적용)
import "./find_id.css";

// 페이지 이동을 위한 Link import
import { Link } from "react-router-dom";

function FindId() {

  // 🔹 상태 관리: 이메일 입력값 저장
  const [email, setEmail] = useState("");

  // 🔹 폼 제출 시 실행되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    console.log("이메일:", email); // 입력값 확인
  };

  return (
    <div>

      {/* ================= HEADER ================= */}
      <header>

        {/* 네비게이션 영역 */}
        <nav>

          {/* 내부 정렬을 위한 컨테이너 */}
          <div className="inner" style={{ padding: "0 24px" }}>

            {/* 로고 + 로그인 영역 */}
            <div 
              className="logo" 
              style={{ display: "flex", alignItems: "center" }}
            >

              {/* 🔹 메인 페이지 이동 로고 */}
              <h1>
                <Link 
                  to="/" 
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  zero-naeng-fe
                </Link>
              </h1>

              {/* 🔹 로그인 페이지 이동 */}
              <h2 className="name">
                <Link to="/login">
                  로그인
                </Link>
              </h2>

            </div>
          </div>
        </nav>
      </header>


      {/* ================= MAIN ================= */}
      <main>

        {/* 🔹 페이지 제목 */}
        <h3 className="main_title">
          아이디 찾기
        </h3>

        {/* 🔹 설명 영역 (애니메이션 포함) */}
        <div style={{ transition: "opacity 333ms ease", opacity: 1 }}>

          {/* 설명 텍스트 */}
          <div className="description">

            {/* 버튼 형태 안내 문구 */}
            <button type="button" style={{ lineHeight: "inherit" }}>

              {/* 여백을 위한 span */}
              <span 
                className="margin-right" 
                style={{ marginRight: "2px" }}
              >
                이메일을 입력하세요
              </span>

            </button>
          </div>


          {/* ================= FORM ================= */}
          {/* 이메일 입력 폼 */}
          <form onSubmit={handleSubmit}>

            {/* 🔹 입력 박스 전체 영역 */}
            <div className="Label-input">

              {/* 🔹 input 내부 정렬 */}
              <div className="Label-input_in">

                {/* 🔹 라벨 (입력 안내 텍스트) */}
                <label className="label">
                  이메일
                </label>

                {/* 🔹 이메일 입력창 */}
                <input
                  className="email_input"
                  autoComplete="off"       // 자동완성 비활성화
                  inputMode="text"         // 키보드 타입
                  name="contact"           // input 이름
                  aria-invalid="false"     // 접근성
                  value={email}            // 상태값 연결
                  onChange={(e) => setEmail(e.target.value)} // 입력값 업데이트
                />

              </div>
            </div>


            {/* 🔹 버튼 영역 */}
            <div className="form-main-button">

              {/* 제출 버튼 */}
              <button 
                className="Button-button" 
                type="submit"
              >
                다음
              </button>

            </div>

          </form>
        </div>
      </main>


      {/* ================= FOOTER ================= */}
      <footer>
        {/* 현재는 비어 있음 (추후 확장 가능) */}
      </footer>

    </div>
  );
}

// 외부에서 사용할 수 있도록 export
export default FindId;