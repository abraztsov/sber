import axios from 'axios';

const fetchGithubProjects = ({ license, projectName, page = 1 }) =>
  axios.get(
    `https://api.github.com/search/repositories?q=${
      projectName ? `${projectName}+` : ''
    }language:javascript${
      license ? `+license:${license}` : ''
    }&created=>2018-09-01${page ? `&page=${page}` : ''}`
  );

export default { fetchGithubProjects };
