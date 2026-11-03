import { Container, Flex, SimpleGrid, Stack, Text, Title } from '@mantine/core';

import { stack } from '../data/stack';

function StackSection() {
  return (
    <section id="stack">
      <Container size="lg">
        <Stack gap="xl">

          <Flex justify="space-between" align="center">
            <Title order={2}>Stack</Title>

            <Text size="sm" c="dimmed">
              O que uso no dia a dia
            </Text>
          </Flex>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
            {stack.map((item) => (
              <Stack key={item.category} gap="xs">
                <Title order={4}>
                  {item.category}
                </Title>

                <Text>
                  {item.technologies}

                  {item.note && (
                    <Text span c="dimmed" size="sm">
                      {' '}({item.note})
                    </Text>
                  )}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>

        </Stack>
      </Container>
    </section>
  );
}

export default StackSection;