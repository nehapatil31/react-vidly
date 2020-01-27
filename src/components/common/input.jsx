import React from "react";

const Input = ({ error, name, label, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        id={name}
        className={`form-control${error ? " is-invalid" : ""}`}
        name={name}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
