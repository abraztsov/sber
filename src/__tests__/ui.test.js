import React from 'react';
import { shallow } from 'enzyme';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';

describe('<Input />', () => {
  it('change value by passed props', () => {
    const wrapper = shallow(<Input value="foo" />);
    expect(wrapper.find('input').props().value).toEqual('foo');
    wrapper.setProps({ value: 'bar' });
    expect(wrapper.find('input').props().value).toEqual('bar');
  });
});

describe('<Select />', () => {
  it('change value by passed props', () => {
    const wrapper = shallow(<Select value="foo" />);
    expect(wrapper.find('select').props().value).toEqual('foo');
    wrapper.setProps({ value: 'bar' });
    expect(wrapper.find('select').props().value).toEqual('bar');
  });
});
