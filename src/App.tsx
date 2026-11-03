import Hero from "./components/Hero"
import Projects from "./components/Projects"
import StackSection from "./components/Stack"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import { Container } from '@mantine/core';

function App() {
  return (
    <main>
      <Container size={1088} className="wrap">
        <Hero />
        <Projects />
        <StackSection />
        <Contact />
        <Footer />
      </Container>
    </main>
  );
}

export default App
