import { Anchor, Badge, Group, Text, Title } from '@mantine/core';

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
    <article className="proj">
      <Text className="route">
        <em>GET</em>
        {project.route}
      </Text>

      <div>
        <Title order={3}>{project.title}</Title>

        <Text className="proj-desc">{project.description}</Text>

        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <Group gap={6}>
          {project.technologies.map((technology) => (
            <Badge key={technology} className="tag" variant="default" radius="sm" tt="none">
              {technology}
            </Badge>
          ))}
        </Group>
      </div>

      <Anchor
        className="link"
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        código ↗
      </Anchor>
    </article>
  );
}

export default ProjectCard;
