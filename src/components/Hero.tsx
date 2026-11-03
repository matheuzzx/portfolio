import {
  Container,
  Flex,
  Stack,
  Text,
  Title,
  Anchor,
} from '@mantine/core';

import HeroCode from './HeroCode';

function Hero() {
  return (
    <section id="inicio">
      <Container size="lg">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          gap="xl"
        >
          <Stack gap="md">
            <Text>
              Disponível para estágio e vaga júnior
            </Text>

            <div>
              <Title order={1}>Matheus.</Title>
              <Title order={2}>Backend em Java.</Title>
            </div>

            <Text>
              Construo APIs REST com Spring Boot, banco relacional e
              segurança com JWT. Estou aprendendo React para entregar
              aplicações completas.
            </Text>

            <Flex gap="lg" wrap="wrap">
              <Anchor href="#projetos">
                Ver projetos →
              </Anchor>

              <Anchor
                href="https://github.com/SEU_USUARIO"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </Anchor>

              <Anchor
                href="https://linkedin.com/in/SEU_USUARIO"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </Anchor>
            </Flex>
          </Stack>

          <HeroCode />
        </Flex>
      </Container>
    </section>
  );
}

export default Hero;