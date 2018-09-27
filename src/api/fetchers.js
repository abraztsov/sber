import wrappers from './wrappers';
const fetchProjects = async ({ license, projectName, page }) => {
  try {
    const {
      data: { items: projects, total_count }
    } = await wrappers.fetchGithubProjects({ license, projectName, page });
    const totalPages = total_count > 1 ? Math.ceil(total_count / 30) : 0;
    return { projects, totalPages };
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
export default { fetchProjects };
