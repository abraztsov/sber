import React from 'react';

const Select = ({ onChange, options = [], value }) => (
  <select
    value={value}
    onChange={e => onChange({ event: e, value: e.target.value })}
  >
    {options.map(value => (
      <option value={value} key={value}>
        {value}
      </option>
    ))}
  </select>
);

export default Select;
