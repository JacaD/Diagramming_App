import React from "react";

const Select = ({ options, onChange, ...rest }) => {
  return (
    <select onChange={onChange} {...rest}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
