"use client";

import { motion } from "framer-motion";
import { FiBook, FiBriefcase, FiCode } from "react-icons/fi";

const experiences = [
  {
    date: "2024 — Présent",
    role: "BUT 2 Informatique",
    company: "IUT — [Ville]",
    type: "formation",
    description:
      "Formation en développement logiciel, réseaux, bases de données et gestion de projet.",
  },
  {
    date: "Été 2024",
    role: "[Intitulé du poste]",
    company: "[Entreprise]",
    type: "job",
    description:
      "Description du job d'été ou de l'expérience professionnelle. À remplacer par la vraie description.",
  },
  {
    date: "Été 2023",
    role: "[Intitulé du poste]",
    company: "[Entreprise]",
    type: "job",
    description:
      "Description du job d'été ou de l'expérience professionnelle. À remplacer par la vraie description.",
  },
];

const typeConfig: Record<string, { label: string; icon: React.ElementType; badge: string; border: string }> = {
  formation: {
    label: "Formation",
    icon: FiBook,
    badge: "bg-primary text-white",
    border: "border-primary/30",
  },
  job: {
    label: "Expérience",
    icon: FiBriefcase,
    badge: "bg-text text-white",
    border: "border-border",
  },
  stage: {
    label: "Stage",
    icon: FiCode,
    badge: "bg-green-600 text-white",
    border: "border-green-200",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Parcours
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Mes expériences
          </h2>
        </div>

        <div className="relative">
          {/* Fil conducteur — ligne verticale dégradée */}
          <div
            className="absolute left-4 top-3 bottom-3 w-0.5"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #7c3aed 8%, #7c3aed 92%, transparent)",
            }}
          />

          <ol className="space-y-10">
            {experiences.map((exp, i) => {
              const cfg = typeConfig[exp.type] ?? typeConfig.job;
              const Icon = cfg.icon;
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="relative pl-14"
                >
                  {/* Badge icône sur le fil */}
                  <div
                    className={`absolute left-0 top-0 w-8 h-8 rounded-full ${cfg.badge} flex items-center justify-center shadow-md`}
                  >
                    <Icon size={14} />
                  </div>

                  {/* Card */}
                  <div
                    className={`glass-card rounded-2xl p-5 space-y-2 border-l-4 ${cfg.border}`}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${cfg.badge}`}
                      >
                        {cfg.label}
                      </span>
                      <span className="text-xs text-muted">{exp.date}</span>
                    </div>
                    <h3 className="font-semibold text-text">{exp.role}</h3>
                    <p className="text-sm text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
