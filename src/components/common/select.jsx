import React from "react";

const Select = ({ options, onChange, def, ...rest }) => {
  return (
    <select onChange={onChange} {...rest} defaultValue={def}>
      {options.map(option => (
        <option key={option} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
