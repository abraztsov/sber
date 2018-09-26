import { lifecycle } from 'recompose';
import debounce from 'lodash.debounce';
import api from '../../api';

export const withGithubProjects = lifecycle({
  state: { loading: true },
  componentDidMount() {
    this.fetchProjects();
  },
  componentDidUpdate(prevProps) {
    if (
      prevProps.license !== this.props.license ||
      prevProps.projectName !== this.props.projectName
    ) {
      this.setState({ loading: true });
      this.fetchProjectsWithDebounce();
    }
  },
  fetchProjectsWithDebounce: debounce(function() {
    this.fetchProjects();
  }, 150),
  async fetchProjects() {
    const { license, projectName } = this.props;

    try {
      const {
        data: { items: projects }
      } = await api.wrappers.fetchGithubProjects({ license, projectName });
      console.log(projects);
      this.setState({ loading: false, projects });
    } catch (error) {
      console.error(error.message);
    }
  }
});
