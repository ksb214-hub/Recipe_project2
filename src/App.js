import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Login from "./Login/Login";
import FindId from "./Login/find_id/find_id"; // 🔥 추가

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<Main />} />

        {/* 로그인 */}
        <Route path="/login" element={<Login />} />

        {/* 🔥 아이디 찾기 */}
        <Route path="/find-id" element={<FindId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;