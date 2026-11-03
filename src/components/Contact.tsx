import {
  Button,
  Container,
  CopyButton,
  Flex,
  Stack,
  Text,
  Title,
} from '@mantine/core';

function Contact() {
  const email = 'promatheusmedeiros@gmail.com';

  return (
    <section id="contato">
      <Container size="lg">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap="xl"
        >
          <Stack gap="xs">
            <Title order={2}>Vamos conversar?</Title>

            <Text>
              Aberto a estágio e vagas júnior em backend Java,
              presencial ou remoto.
            </Text>
          </Stack>

          <Flex align="center" gap="md" wrap="wrap">
            <Text>{email}</Text>

            <CopyButton value={email} timeout={2000}>
              {({ copied, copy }) => (
                <Button
                  onClick={copy}
                  color={copied ? 'teal' : 'blue'}
                >
                  {copied ? 'E-mail copiado!' : 'Copiar e-mail'}
                </Button>
              )}
            </CopyButton>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
}

export default Contact;