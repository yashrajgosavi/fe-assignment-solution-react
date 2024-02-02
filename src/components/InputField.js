import React from "react";

const InputField = ({ value, placeholder, onChange }) => (
  <input
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default InputField;
