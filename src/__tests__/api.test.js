import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { render, wait } from 'react-testing-library';
import ProjectList from '../components/ProjectList';
import { withGithubProjects } from '../components/helpers';
import 'jest-dom/extend-expect';

const mock = new MockAdapter(axios);
const GithubProjectLists = withGithubProjects(ProjectList);

describe('api wrapper fetchGithubProjects', () => {
  it('renders all fetched projects', async () => {
    mock.onGet().reply(200, {
      items: [{ id: 1, name: 'Meteor' }, { id: 2, name: 'Javascript' }]
    });

    const { getByText } = render(<GithubProjectLists />);
    await wait(() => getByText('Meteor'));

    expect(getByText('Meteor')).toBeInTheDocument();
    expect(getByText('Javascript')).toBeInTheDocument();
  });
});
