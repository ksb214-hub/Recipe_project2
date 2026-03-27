// src/components/Button/Button.js
import React from "react";
import "./Button.css";

function Button({
  children,      // 버튼 안 글자 (로그인, 검색 등)
  type = "button",
  variant = "primary", // 스타일 종류
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`btn ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;