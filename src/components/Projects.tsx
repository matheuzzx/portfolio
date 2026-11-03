import { Text, Title } from '@mantine/core';

import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section id="projetos">
      <div className="sec-h">
        <Title order={2}>Projetos</Title>
        <Text component="small">{projects.length} itens</Text>
      </div>

      {projects.map((project) => (
        <ProjectCard key={project.route} project={project} />
      ))}
    </section>
  );
}

export default Projects;
