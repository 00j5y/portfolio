"use client";

import { motion } from "framer-motion";
import { FiLayout, FiServer, FiTerminal, FiBox } from "react-icons/fi";
import SectionTracker from "@/app/components/ui/SectionTracker";

const categories = [
  {
    icon: FiLayout,
    title: "Développement Front-end",
    description: "J'aime construire des interfaces qui respirent : fluides, accessibles et agréables à utiliser.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: FiServer,
    title: "Backend & Base de Données",
    description: "De l'API au schéma SQL, je m'assure que les données circulent proprement, vite, et sans surprise.",
    items: ["Node.js", "PHP", "PostgreSQL", "MySQL", "Supabase"],
  },
  {
    icon: FiTerminal,
    title: "Langages de Programmation",
    description: "Chaque langage a sa logique. J'ai appris à en choisir le bon selon le problème à résoudre.",
    items: ["TypeScript / JavaScript", "Python", "PHP", "C", "SQL"],
  },
  {
    icon: FiBox,
    title: "Architecture & Méthodologies",
    description: "Coder c'est bien, livrer c'est mieux. Je travaille avec les bons outils pour que ça tourne en prod.",
    items: ["Docker & virtualisation", "Git & versionnage", "Linux", "Agile / Scrum"],
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-surface">
      <SectionTracker section="skills" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Compétences
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Ce que je sais faire
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-text mb-1">{cat.title}</h3>
                <p className="text-xs text-muted leading-relaxed mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: i * 0.1 + j * 0.06 }}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary-light text-primary border border-primary/10"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
