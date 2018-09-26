import { lifecycle } from 'recompose';
import api from '../../api';

export const withGithubProjects = lifecycle({
  state: { loading: true },
  componentDidMount() {
    this.fetchProjects();
  },
  componentDidUpdate(prevProps) {
    if (prevProps.license !== this.props.license) {
      this.setState({ loading: true });
      this.fetchProjects();
    }
  },
  async fetchProjects() {
    const { license } = this.props;

    try {
      const {
        data: { items: projects }
      } = await api.wrappers.fetchGithubProjects({ license });
      console.log(projects);
      this.setState({ loading: false, projects });
    } catch (error) {
      console.error(error.message);
    }
  }
});
