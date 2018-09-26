import React, { Component } from 'react';
import { compose } from 'recompose';

import ProjectList from '../ProjectList';
import Select from '../ui/Select';
import Input from '../ui/Input';

import { withGithubProjects } from '../helpers';
import { LICENSE_LIST } from '../../const.js';

import './App.css';

const GithubProjectList = compose(withGithubProjects)(ProjectList);

class App extends Component {
  state = { license: LICENSE_LIST[0], projectName: '' };

  handleLicenseChange = ({ value }) => this.setState({ license: value });

  handleProjectNameChange = ({ value }) =>
    this.setState({ projectName: value });

  render() {
    const { license, projectName } = this.state;

    return (
      <div className="App">
        <h3>Javascript Projects List</h3>
        <Select
          onChange={this.handleLicenseChange}
          value={license}
          options={LICENSE_LIST}
        />
        <Input onChange={this.handleProjectNameChange} value={projectName} />
        <GithubProjectList license={license} projectName={projectName} />
      </div>
    );
  }
}

export default App;
