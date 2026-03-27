// src/components/Input/Input.js
import React from "react";
import "./Input.css";

function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  name,
}) {
  return (
    <div className="input-wrapper">

      {/* 🔥 label (있을 때만 출력) */}
      {label && <label className="input-label">{label}</label>}

      {/* 🔥 input */}
      <input
        className="input-field"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />

    </div>
  );
}

export default Input;