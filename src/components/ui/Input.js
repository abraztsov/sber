import React from 'react';
import { withState } from 'recompose';

const enhance = withState('state', 'setState', { value: '' });

const Input = enhance(({ state, setState, onChange }) => (
  <input
    value={state.value}
    type="text"
    onChange={e => {
      const value = e.target.value;
      setState({ value });
      onChange({ event: e, value });
    }}
  />
));

export default Input;
