import wrappers from './wrappers';
const fetchProjects = async ({ license, projectName }) => {
  try {
    const {
      data: { items: projects }
    } = await wrappers.fetchGithubProjects({ license, projectName });
    // console.log(projects);
    return projects;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
export default { fetchProjects };
