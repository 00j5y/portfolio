import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Stack from "@/app/components/Stack";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import SectionCTA from "@/app/components/ui/SectionCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SectionCTA text="En savoir plus sur moi" href="#about" />
        <About />
        <SectionCTA text="Voir ma stack technique" href="#stack" />
        <Stack />
        <Skills />
        <SectionCTA text="Voir mes projets" href="#projects" />
        <Projects />
        <SectionCTA text="Mon parcours" href="#experience" />
        <Experience />
        <SectionCTA text="Me contacter" href="#contact" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
