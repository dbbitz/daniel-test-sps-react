import React from "react";
import "./styles.css";

const Input = ({ type = "text", placeholder, value, onChange, label }) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
};

export default Input;
