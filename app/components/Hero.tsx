"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionTracker from "@/app/components/ui/SectionTracker";

const FULL_NAME = "Jay L'héronde";
const TYPEWRITER_SPEED = 80;

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < FULL_NAME.length) {
        setDisplayed(FULL_NAME.slice(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, TYPEWRITER_SPEED);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <SectionTracker section="hero" />
      {/* Fond : dégradé radial blanc vers vert */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, var(--color-primary-mid) 100%)",
        }}
      />

      {/* Fond : grille de points avec masque radial (par-dessus le gradient) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary-light text-primary mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Disponible pour une alternance
        </motion.div>

        {/* Nom avec typewriter */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-3 leading-tight"
        >
          <span className="gradient-text">{displayed}</span>
          <span
            className={`inline-block w-0.5 h-[1em] ml-1 align-middle bg-primary ${
              done ? "animate-blink" : ""
            }`}
          />
        </motion.h1>

        {/* Spécialité */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-sm font-medium text-muted tracking-wide mb-6"
        >
          Développeur d&apos;application · BUT Informatique spé RACA
        </motion.p>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Je conçois des applications web et j&apos;automatise ce qui le mérite.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-border text-text font-medium hover:border-primary hover:text-primary transition-colors bg-white/60 backdrop-blur-sm"
          >
            Me contacter
          </a>
        </motion.div>

        {/* Scroll CTA */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-28 flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="text-sm font-semibold text-white tracking-widest uppercase group-hover:text-white/70 transition-colors">
            Découvrir
          </span>
          <svg
            className="w-5 h-5 text-white group-hover:text-white/70 transition-colors animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
