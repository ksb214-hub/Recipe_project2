// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Login from "./Login/Login";
import FindId from "./Login/find_id/find_id";
import SearchPage from "./SearchPage/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/find-id" element={<FindId />} />

        {/* 🔥 검색 페이지 추가 */}
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;