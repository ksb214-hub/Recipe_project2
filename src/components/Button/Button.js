// src/components/Button/Button.js
import React from "react";
import "./Button.css";
function Button({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
}) 
{
  return (
    <button
      className={`btn ${variant}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;