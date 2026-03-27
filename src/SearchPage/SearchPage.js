import { Search, ChefHat } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// ✅ CSS Modules import
import styles from "./SearchPage.module.css";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const categories = ["전체", "한식", "중식", "일식", "양식"];
  const recipeResults = [
    {
      id: 1,
      title: "마르게리타 피자",
      description: "신선한 토마토와 모짜렐라 치즈",
      time: "45분",
      difficulty: "보통",
      servings: "2-3인분",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("검색:", searchQuery);
  };

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <header style={{ background: "black", padding: "0 1.5rem" }}>
        <nav style={{ display: "flex", alignItems: "center"}}>
          <h1>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              zero-naeng-fe
            </Link>
          </h1>
        </nav>
      </header>

      {/* 검색 영역 */}
      <div className={styles.searchArea}>
        <div className={styles.titleWrapper}>
          <ChefHat size={24} />
          <h1>레시피를 찾아보세요</h1>
        </div>

        <form onSubmit={handleSearch} className={styles.searchForm}>
          <div className={styles.searchWrapper}>
            <Search size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="재료나 요리 이름 입력"
            />
          </div>

          <button type="submit" className={styles.searchBtn}>
            검색
          </button>
        </form>

        <div className={styles.categoryContainer}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${
                selectedCategory === category ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 검색 결과 */}
      <div>
        {recipeResults.map((recipe) => (
          <div key={recipe.id} className={styles.resultItem}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <span>{recipe.time}</span>
            <span>{recipe.difficulty}</span>
            <span>{recipe.servings}</span>
          </div>
        ))}
      </div>
    </div>
  );
}