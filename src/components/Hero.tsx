import { Button, Group, Text, Title } from '@mantine/core';

import HeroCode from './HeroCode';

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div>
        <Text className="eyebrow">
          <span className="dot" />
          Disponível para estágio e vaga júnior
        </Text>

        <Title order={1} className="hero-title">
          Matheus.
          <br />
          <span>Backend em Java.</span>
        </Title>

        <Text className="lede">
          Construo <strong>APIs REST com Spring Boot</strong>, banco relacional e
          segurança com JWT. Estou aprendendo React para entregar aplicações
          completas.
        </Text>

        <Group gap="sm" className="actions">
          <Button component="a" href="#projetos" size="md">
            Ver projetos
          </Button>

          <Button
            component="a"
            href="https://github.com/matheuzzx/"
            target="_blank"
            rel="noopener noreferrer"
            variant="default"
            size="md"
          >
            GitHub
          </Button>

          <Button
            component="a"
            href="https://www.linkedin.com/in/fxckedz/"
            target="_blank"
            rel="noopener noreferrer"
            variant="default"
            size="md"
          >
            LinkedIn
          </Button>
        </Group>
      </div>

      <HeroCode />
    </section>
  );
}

export default Hero;
