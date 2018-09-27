import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import ProjectList from '../ProjectList';
import Select from '../ui/Select';
import Input from '../ui/Input';

import { LICENSE_LIST } from '../../const.js';
import api from '../../api';
import './GithubProjects.css';

class App extends Component {
  constructor() {
    super();

    const projectsFromLocalStorage = localStorage.getItem('githubProjects');
    const projects = projectsFromLocalStorage
      ? JSON.parse(projectsFromLocalStorage)
      : [];

    this.state = {
      license: LICENSE_LIST[0],
      projectName: '',
      projects,
      loading: !projects.length
    };
  }

  async componentDidMount() {
    const { license, projectName, projects } = this.state;
    // console.log(api);
    if (!projects.length) {
      try {
        const projects = await api.fetchers.fetchProjects({
          license,
          projectName
        });
        this.setState({ projects, loading: false });
      } catch (error) {
        console.error(error.message);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { license, projectName, projects } = this.state;

    if (
      prevState.license !== license ||
      prevState.projectName !== projectName
    ) {
      this.fetchProjectsWithDebounce({ license, projectName });
    }

    if (projects && projects.length > 0)
      localStorage.setItem('githubProjects', JSON.stringify(projects));
  }

  fetchProjectsWithDebounce = debounce(async params => {
    try {
      this.setState({ loading: true });
      const projects = await api.fetchers.fetchProjects(params);
      this.setState({ projects, loading: false });
    } catch (error) {
      console.error(error.message);
    }
  }, 150);

  handleLicenseChange = ({ value }) => this.setState({ license: value });

  handleProjectNameChange = ({ value }) =>
    this.setState({ projectName: value });

  render() {
    const { license, projectName, projects } = this.state;

    return (
      <div className="GithubProjects">
        <h3>Javascript Projects List</h3>
        <Select
          onChange={this.handleLicenseChange}
          value={license}
          options={LICENSE_LIST}
        />
        <Input onChange={this.handleProjectNameChange} value={projectName} />
        <ProjectList projects={projects} />
      </div>
    );
  }
}

export default App;
