"use client";

import { motion } from "framer-motion";
import SectionTracker from "@/app/components/ui/SectionTracker";

const competencies = [
  {
    code: "C1",
    title: "Aller jusqu'à une application complète",
    description:
      "Concevoir, développer et déployer une application fonctionnelle de bout en bout.",
    content:
      "Sur Konexx, j'ai géré le projet seul : architecture, frontend, base de données Supabase et déploiement Docker. Sur CampusGo, j'ai livré une plateforme de covoiturage complète avec authentification, gestion de profils et réservations.",
    examples: ["Konexx (Next.js + Supabase + Docker)", "CampusGo (Laravel + MySQL)"],
  },
  {
    code: "C2",
    title: "Choisir des algorithmes adaptés au problème",
    description:
      "Identifier et implémenter les structures de données et algorithmes les plus adaptés.",
    content:
      "Sur CampusGo, j'ai conçu un moteur de recherche de trajets avec filtrage multi-critères et deux modes de tri. Sur ai-mail-assistant, j'ai implémenté un filtrage temporel sur 24h et une normalisation du texte par regex avant envoi au LLM.",
    examples: [
      "Filtrage multi-critères (CampusGo)",
      "Déduplication par cache (CampusGo)",
      "Regex + fenêtre 24h (ai-mail-assistant)",
    ],
  },
  {
    code: "C3",
    title: "Déployer des services dans une architecture réseau",
    description:
      "Mettre en place, configurer et déployer des services accessibles sur un réseau.",
    content:
      "J'ai conteneurisé Konexx et ai-mail-assistant avec Docker pour la production, et déployé ce portfolio en continu sur Vercel. En TP à l'IUT, j'ai configuré des VMs en réseau et déployé des services sur une architecture virtualisée.",
    examples: [
      "Docker (Konexx, ai-mail-assistant)",
      "Vercel CI/CD (portfolio)",
      "TP virtualisation réseau (IUT Amiens)",
    ],
  },
  {
    code: "C4",
    title: "Optimiser une base de données et assurer la sécurité",
    description:
      "Concevoir un schéma adapté, optimiser les requêtes, et mettre en place des mesures de sécurité.",
    content:
      "Sur Konexx, j'ai configuré Supabase avec Row Level Security pour restreindre les accès par utilisateur. Sur CampusGo, j'ai conçu le schéma MySQL avec migrations Laravel, authentification et hashage des mots de passe.",
    examples: ["Supabase + RLS (Konexx)", "MySQL + auth Laravel (CampusGo)"],
  },
];

export default function Reflection() {
  return (
    <section id="reflection" className="py-24 bg-surface">
      <SectionTracker section="reflection" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Bilan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Mes acquis en BUT2
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Les quatre compétences du programme national : ce que j&apos;en ai retenu, et comment je les ai mises en pratique.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {competencies.map((comp, i) => (
            <motion.div
              key={comp.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {comp.code}
                </span>
                <h3 className="font-semibold text-text text-sm leading-snug">{comp.title}</h3>
              </div>
              <p className="text-xs text-muted leading-relaxed mb-4">{comp.description}</p>

              {comp.content ? (
                <>
                  <p className="text-sm text-muted leading-relaxed mb-4">{comp.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {comp.examples.map((ex) => (
                      <span
                        key={ex}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary-light text-primary border border-primary/10"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <div className="rounded-xl border border-dashed border-border p-4 text-center">
                  <p className="text-xs text-muted italic">Contenu à compléter</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
