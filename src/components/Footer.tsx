import { Container, Flex, Text } from '@mantine/core';

function Footer() {
  return (
    <footer>
      <Container size="lg">
        <Flex
          justify="space-between"
          align="center"
          gap="md"
          wrap="wrap"
        >
          <Text size="sm">
            © {new Date().getFullYear()} Matheus
          </Text>

          <Text size="sm" c="dimmed">
            Feito com React, TypeScript e Mantine
          </Text>
        </Flex>
      </Container>
    </footer>
  );
}

export default Footer;