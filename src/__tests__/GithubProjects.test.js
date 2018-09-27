import React from 'react';
import { mount } from 'enzyme';
import 'jest-dom/extend-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { render, wait } from 'react-testing-library';
import GithubProjects from '../components/GithubProjects/GithubProjects';
import localStorage from '../localStorageMock';
window.localStorage = localStorage;

const mock = new MockAdapter(axios);

describe('<GithubProjects />', () => {
  mock.onGet().reply(200, {
    items: [{ id: 1, name: 'Meteor' }, { id: 2, name: 'Javascript' }]
  });

  it('renders Input component', () => {
    const wrapper = mount(<GithubProjects />);
    expect(wrapper.find('Input')).toHaveLength(1);
  });
  it('renders Select component', () => {
    const wrapper = mount(<GithubProjects />);
    expect(wrapper.find('Select')).toHaveLength(1);
  });
  it('renders all fetched projects', async () => {
    const { getByText } = render(<GithubProjects />);
    await wait(() => getByText('Meteor'));

    expect(getByText('Meteor')).toBeInTheDocument();
    expect(getByText('Javascript')).toBeInTheDocument();
  });
});
