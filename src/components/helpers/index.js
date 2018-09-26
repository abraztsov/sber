import { lifecycle } from 'recompose';
import api from '../../api';

export const withGithubProjects = lifecycle({
  state: { loading: true },
  async componentDidMount() {
    try {
      const {
        data: { items: projects }
      } = await api.wrappers.fetchGithubProjects();
      // console.log(projects);
      this.setState({ loading: false, projects });
    } catch (error) {
      console.error(error.message);
    }
  }
});
