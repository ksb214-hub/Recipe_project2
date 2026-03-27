import React, { useRef } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  // 🔥 카드 데이터
  const recipes = [
    { id: 1, title: "유부초밥", image: "https://via.placeholder.com/150" },
    { id: 2, title: "김치볶음밥", image: "https://via.placeholder.com/150" },
    { id: 3, title: "파스타", image: "https://via.placeholder.com/150" },
    { id: 4, title: "스테이크", image: "https://via.placeholder.com/150" },
    { id: 5, title: "샐러드", image: "https://via.placeholder.com/150" },
  ];

  // 🔥 슬라이드 제어
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div>
      {/* ================= NAV ================= */}
      <nav className="zero-naeng-fe_nav">
        <ul>
          {/* 로고 */}
          <li>
            <Link className="zero-naeng-fe_link" to="/">
              zero-naeng-fe
            </Link>
          </li>

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

      {/* ================= MAIN ================= */}
      <main className="con">
        <div className="home_cont_cate">

          {/* 타이틀 */}
          <h3>
            <a href="#">BEST 요리모음</a>
          </h3>

          {/* 🔥 슬라이드 버튼 */}
          <button className="slide_btn left" onClick={scrollLeft}>
            ←
          </button>
          <button className="slide_btn right" onClick={scrollRight}>
            →
          </button>

          {/* 리스트 */}
          <div className="slick-list">
            <ul className="slicklist" ref={sliderRef}>
              {recipes.map((recipe) => (
                <li key={recipe.id} className="slick">
                  <a className="common_sp_link" href="#">

                    {/* 이미지 */}
                    <div className="common_sp_thumb">
                      <img src={recipe.image} alt={recipe.title} />
                    </div>

                    {/* 제목 */}
                    <div className="common_sp_caption">
                      <div className="common_sp_caption_tit">
                        {recipe.title}
                      </div>
                    </div>

                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Main;