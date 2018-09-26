import React, { Component } from 'react';
import { compose } from 'recompose';

import ProjectList from '../ProjectList';
import { withGithubProjects } from '../helpers';

import './App.css';

const GithubProjectList = compose(withGithubProjects)(ProjectList);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Javascript Projects List</h3>
        <GithubProjectList />
      </div>
    );
  }
}

export default App;
