import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App/App';

describe('<App />', () => {
  it('renders Input component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Input')).toHaveLength(1);
  });
  it('renders Select component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Select')).toHaveLength(1);
  });
});
