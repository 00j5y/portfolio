"use client";

import { motion } from "framer-motion";
import { FiBook, FiBriefcase, FiCode } from "react-icons/fi";
import SectionTracker from "@/app/components/ui/SectionTracker";

const experiences = [
  {
    date: "Jan. 2026 – Mars 2026",
    role: "Stage Développeur Web Full Stack",
    company: "EI Charlotte Dimpre · Distanciel",
    type: "stage",
    description:
      "J'ai bossé sur Konexx, une plateforme qui met en relation clients et prestataires. Next.js côté frontend, Supabase pour la base de données, Docker pour le déploiement.",
  },
  {
    date: "2024 – Présent",
    role: "BUT Informatique · Développement d'application (RACA)",
    company: "IUT d'Amiens · Amiens",
    type: "formation",
    description:
      "Développement logiciel, réseaux, bases de données, gestion de projet. Spécialité RACA (Réalisation d'Applications : Conception et Architecture).",
  },
  {
    date: "2022 – 2024",
    role: "Baccalauréat, Mention Assez Bien",
    company: "Lycée Pablo Neruda · Dieppe",
    type: "formation",
    description:
      "Spécialité Mathématiques et NSI, option Maths Experte.",
  },
  {
    date: "Jan. 2020",
    role: "Stage Administrateur Réseau",
    company: "Lefebvre Consulting · La Vaupalière",
    type: "stage",
    description:
      "Réparation et maintenance de postes, mise en place d'un serveur.",
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
      <SectionTracker section="experience" />
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
          {/* Fil conducteur : ligne verticale dégradée */}
          <div
            className="absolute left-4 top-3 bottom-3 w-0.5"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--color-primary) 8%, var(--color-primary) 92%, transparent)",
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
                  className="relative pl-12 sm:pl-14"
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
