import React from "react";

const InputField = ({ id, label, type, value, onChange }) => (
  <>
    <label htmlFor={id} className="loginLabel">
      {label}
    </label>
    <input
      type={type}
      id={id}
      required
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="loginInput"
    />
  </>
);

export default InputField;
