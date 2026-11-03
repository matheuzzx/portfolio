import { Container, Flex, Stack, Text, Title } from '@mantine/core';

import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section id="projetos">
      <Container size="lg">
        <Stack gap="xl">
          <Flex justify="space-between" align="center">
            <Title order={2}>Projetos</Title>

            <Text size="sm" c="dimmed">
              {projects.length} itens
            </Text>
          </Flex>

          {projects.map((project) => (
            <ProjectCard
              key={project.route}
              project={project}
            />
          ))}
        </Stack>
      </Container>
    </section>
  );
}

export default Projects;