import Hero from "./components/Hero"
import Projects from "./components/Projects"
import StackSection from "./components/Stack"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import { Container, Stack } from '@mantine/core';

function App() {
  return (
    <>
      <Container size={1088} py="56px">
        <Stack gap="72px">
          <Hero />
          <Projects />
          <StackSection />
          <Contact />
        </Stack>
      </Container>

      <Footer />
    </>
  );
}

export default App
