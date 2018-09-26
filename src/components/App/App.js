import React, { Component } from 'react';
import { compose } from 'recompose';

import ProjectList from '../ProjectList';
import Select from '../ui/Select';

import { withGithubProjects } from '../helpers';
import { LICENSE_LIST } from '../../const.js';

import './App.css';

const GithubProjectList = compose(withGithubProjects)(ProjectList);

class App extends Component {
  state = { licence: LICENSE_LIST[0] };

  onChange = ({ value }) => this.setState({ licence: value });

  render() {
    const { licence } = this.state;

    return (
      <div className="App">
        <h3>Javascript Projects List</h3>
        <Select
          onChange={this.onChange}
          value={licence}
          options={LICENSE_LIST}
        />
        <GithubProjectList license={licence} />
      </div>
    );
  }
}

export default App;
