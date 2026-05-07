import { Suspense } from "react";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Stack from "@/app/components/Stack";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Narrative from "@/app/components/Narrative";
import Reflection from "@/app/components/Reflection";
import References from "@/app/components/References";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import SectionCTA from "@/app/components/ui/SectionCTA";

function ProjectsSkeleton() {
  return (
    <section className="py-24 bg-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="h-4 w-16 bg-gray-200 rounded-full mx-auto animate-pulse" />
          <div className="h-10 w-72 bg-gray-200 rounded-xl mx-auto mt-3 animate-pulse" />
          <div className="h-4 w-56 bg-gray-100 rounded-full mx-auto mt-3 animate-pulse" />
        </div>
        <div className="flex gap-6 overflow-hidden">
          <div className="shrink-0 w-4 md:w-0" />
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="shrink-0 w-[calc(100vw-4rem)] sm:w-[340px] rounded-2xl p-6 flex flex-col gap-4 bg-gray-50 border border-gray-100 animate-pulse"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="h-5 w-32 bg-gray-200 rounded" />
                <div className="h-4 w-4 bg-gray-200 rounded" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-4/5 bg-gray-200 rounded" />
                <div className="h-3 w-3/5 bg-gray-200 rounded" />
              </div>
              <div className="flex gap-1.5">
                <div className="h-5 w-14 bg-gray-200 rounded-full" />
                <div className="h-5 w-14 bg-gray-200 rounded-full" />
              </div>
              <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                <div className="h-4 w-16 bg-gray-200 rounded-full" />
                <div className="h-4 w-8 bg-gray-200 rounded ml-auto" />
                <div className="h-4 w-8 bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gray-200" />
            ))}
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <SectionCTA text="Voir ma stack technique" href="#stack" />
        <Stack />
        <Skills />
        <SectionCTA text="Voir mes projets" href="#projects" />
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
        <SectionCTA text="Mon parcours" href="#experience" />
        <Experience />
        <SectionCTA text="Mes réalisations en détail" href="#narrative" />
        <Narrative />
        <SectionCTA text="Bilan de mes acquis" href="#reflection" />
        <Reflection />
        <SectionCTA text="Références" href="#references" />
        <References />
        <SectionCTA text="Me contacter" href="#contact" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
