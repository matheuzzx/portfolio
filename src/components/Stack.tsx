import { SimpleGrid, Text, Title } from '@mantine/core';

import { stack } from '../data/stack';

function StackSection() {
  return (
    <section id="stack">
      <div className="sec-h">
        <Title order={2}>Stack</Title>
        <Text component="small">o que uso no dia a dia</Text>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" className="stack">
        {stack.map((item) => (
          <div key={item.category}>
            <Title order={4}>{item.category}</Title>
            <Text>
              {item.technologies}
              {item.note && <span className="lvl"> ({item.note})</span>}
            </Text>
          </div>
        ))}
      </SimpleGrid>
    </section>
  );
}

export default StackSection;
