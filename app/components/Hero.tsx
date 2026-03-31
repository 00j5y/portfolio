"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FULL_NAME = "Jay L'HÉRONDE";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg pt-16">
      {/* Orbes de fond */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-float"
        style={{ background: "var(--color-primary)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-float"
        style={{
          background: "var(--color-primary-mid)",
          animationDelay: "3s",
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
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          <span className="gradient-text">{displayed}</span>
          <span
            className={`inline-block w-0.5 h-[1em] ml-1 align-middle bg-primary ${
              done ? "animate-blink" : ""
            }`}
          />
        </motion.h1>

        {/* Sous-titre placeholder */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Étudiant en BUT 2 Informatique — je conçois des applications web modernes
          et j&apos;automatise ce qui peut l&apos;être.
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
            className="px-8 py-3 rounded-full border border-border text-text font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Me contacter
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted text-xs"
        >
          <span>Défiler</span>
          <span className="block w-px h-8 bg-border mx-auto animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
