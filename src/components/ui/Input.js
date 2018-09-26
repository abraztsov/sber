import React from 'react';

const Input = ({ onChange, value }) => (
  <input
    value={value}
    onChange={e => onChange({ event: e, value: e.target.value })}
  />
);

export default Input;
