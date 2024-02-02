import React from "react";

const SelectDropdown = ({ value, options, onChange }) => (
  <select value={value} onChange={onChange}>
    {options.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default SelectDropdown;
