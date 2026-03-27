// src/pages/Main/Main.js
import React from "react";
import "./Main.css";
import Card from "../../components/Card/Card";

function Main() {
  // 🔥 더미 데이터 (나중에 data/recipes.js로 분리 가능)
  const recipes = [
    {
      id: 1,
      title: "유부초밥 레시피 모음",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "간단한 김치볶음밥",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "초간단 토스트",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <main className="con">
      <div className="home_cont_cate">

        {/* 타이틀 */}
        <h3>
          <a href="#">BEST 요리모음</a>
        </h3>

        {/* 카드 리스트 */}
        <div className="card-wrapper">
          {recipes.map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          ))}
        </div>

      </div>
    </main>
  );
}

export default Main;