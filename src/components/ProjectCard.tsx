import {
  Anchor,
  Badge,
  Flex,
  List,
  Stack,
  Text,
  Title,
} from '@mantine/core';

type Project = {
  route: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  github: string;
};

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Flex
      className="proj"
      direction={{ base: 'column', md: 'row' }}
      gap="xl"
      align="flex-start"
    >
      <Text className="route">
        <Text span fw={700}>GET</Text> {project.route}
      </Text>

      <Stack gap="sm" style={{ flex: 1 }}>
        <Title order={3}>{project.title}</Title>

        <Text>{project.description}</Text>

        <List>
          {project.features.map((feature) => (
            <List.Item key={feature}>
              {feature}
            </List.Item>
          ))}
        </List>

        <Flex gap="xs" wrap="wrap">
          {project.technologies.map((technology) => (
            <Badge key={technology}>
              {technology}
            </Badge>
          ))}
        </Flex>
      </Stack>

      <Anchor
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        Código ↗
      </Anchor>
    </Flex>
  );
}

export default ProjectCard;