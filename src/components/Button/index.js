import React from "react";
import "./styles.css";

const Button = ({ children, onClick, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="button"
    >
      {children}
    </button>
  );
};

export default Button;
