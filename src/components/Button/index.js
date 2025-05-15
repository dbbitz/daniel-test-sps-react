import React from "react";
import "./styles.css";

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  icon,
  size = "medium",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${variant === "cancel" ? "button-red" : ""} ${
        variant === "save" ? "button-save" : ""
      } ${
        size === "small" ? "button-small" : ""
      } ${size === "large" ? "button-large" : ""} ${
        size === "medium" ? "button-medium" : ""
      }`}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
