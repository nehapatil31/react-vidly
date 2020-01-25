import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
