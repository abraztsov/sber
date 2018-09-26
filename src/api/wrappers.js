import axios from 'axios';

const fetchGithubProjects = params =>
  axios.get(
    'https://api.github.com/search/repositories?q=language:javascript&created=>2018-09-01'
  );

export default { fetchGithubProjects };
