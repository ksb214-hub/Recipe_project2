// src/pages/Search/SearchPage.js
import React, { useState } from "react";
import "./SearchPage.module.css";
import Card from "../../components/Card/Card";
import { Search } from "lucide-react";

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const recipes = [
    {
      id: 1,
      title: "마르게리타 피자",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "김치찌개",
      image: "https://via.placeholder.com/150",
    },
  ];

  // 🔥 실시간 필터링
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.includes(searchQuery)
  );

  return (
    <div className="search-container">

      {/* 🔍 검색 영역 */}
      <div className="search-area">

        <h1>레시피 검색</h1>

        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="레시피 검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

      </div>

      {/* 결과 */}
      <div className="search-result">
        {filteredRecipes.map((recipe) => (
          <Card
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
          />
        ))}
      </div>

    </div>
  );
}

export default SearchPage;