import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { branch, renderComponent, compose } from 'recompose';
import ReactPaginate from 'react-paginate';

import ProjectList from '../ProjectList';
import Select from '../ui/Select';
import Input from '../ui/Input';

import { LICENSE_LIST } from '../../const.js';
import api from '../../api';
import './GithubProjects.css';

const Loader = () => <div>Loading...</div>;
const isLoading = ({ loading }) => loading;
const withLoadingTextWhileLoading = branch(isLoading, renderComponent(Loader));
const EnhanceProjectList = compose(withLoadingTextWhileLoading)(ProjectList);

class GithubProjects extends Component {
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
      loading: !projects.length,
      page: 1,
      totalPages: null
    };
  }

  async componentDidMount() {
    const { license, projectName, projects, page } = this.state;

    if (!projects.length) {
      try {
        const { projects, totalPages } = await api.fetchers.fetchProjects({
          license,
          projectName,
          page
        });
        this.setState({ projects, loading: false, totalPages });
      } catch (error) {
        console.error(error.message);
      }
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { license, projectName, page } = this.state;

    if (
      prevState.license !== license ||
      prevState.projectName !== projectName ||
      prevState.page !== page
    ) {
      this.setState({ loading: true });
      const { projects, totalPages } = await api.fetchers.fetchProjects({
        license,
        projectName,
        page
      });
      this.setState({ projects, loading: false, totalPages });

      if (projects && projects.length > 0) {
        await localStorage.setItem('githubProjects', JSON.stringify(projects));
      }
    }
  }

  handleLicenseChange = ({ value }) => this.setState({ license: value });

  handleProjectNameChange = ({ value }) =>
    this.setState({ projectName: value });

  onPageChange = ({ selected }) => this.setState({ page: selected + 1 });

  render() {
    const { license, projects, loading, totalPages } = this.state;

    return (
      <div className="GithubProjects">
        <h3>Javascript Projects List</h3>
        <Select
          onChange={this.handleLicenseChange}
          value={license}
          options={LICENSE_LIST}
        />
        <Input onChange={debounce(this.handleProjectNameChange, 150)} />
        {!!totalPages && (
          <ReactPaginate
            containerClassName="ReactPaginate"
            pageCount={totalPages > 34 ? 34 : totalPages}
            onPageChange={debounce(this.onPageChange, 150)}
          />
        )}
        <EnhanceProjectList projects={projects} loading={loading} />
      </div>
    );
  }
}

export default GithubProjects;
