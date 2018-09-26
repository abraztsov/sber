import React from 'react';
import Project from '../Project';

const ProjectList = ({ projects = [] }) =>
  projects.map(({ name, id }) => <Project name={name} key={id} />);

export default ProjectList;
