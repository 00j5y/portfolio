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
      "Chez Konexx, le vrai blocage n'était pas technique. Charlotte parlait métier, je devais en sortir des specs exploitables, seul, sans personne pour valider. J'ai appris à questionner un client avant d'écrire la moindre ligne. Sur CampusGo, livrer une app complète en équipe sous contrainte m'a montré que les décisions d'architecture prises trop tard se paient toujours.",
    examples: ["Konexx (Next.js + Supabase + Docker)", "CampusGo (Laravel + MySQL)"],
  },
  {
    code: "C2",
    title: "Choisir des algorithmes adaptés au problème",
    description:
      "Identifier et implémenter les structures de données et algorithmes les plus adaptés.",
    content:
      "Ma première version du moteur de recherche sur CampusGo chargeait tout en base et filtrait côté client. Ça ne tenait pas. J'ai refait le filtrage en SQL avec deux modes de tri et un cache pour éviter les doublons. Sur ai-mail-assistant, j'ai dû choisir une fenêtre temporelle et normaliser les sujets par regex pour que le LLM reçoive un signal propre, pas du bruit.",
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
      "Docker m'a causé plus de problèmes que prévu au départ sur Konexx. Variables d'environnement, volumes, réseau entre conteneurs : chaque erreur apprenait quelque chose. Une fois que ça tournait en prod, j'ai compris pourquoi on conteneurise. Ce portfolio tourne en CI/CD sur Vercel, chaque push déclenche un déploiement automatique. En TP à l'IUT, configurer un réseau de VMs a mis des mots concrets sur des concepts que je n'avais vus que sur du papier.",
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
      "Sur Konexx, ma première configuration RLS Supabase laissait passer des requêtes qu'elle n'aurait pas dû. J'ai dû relire la doc, tester cas par cas et refactorer les policies. Sur CampusGo, j'ai conçu le schéma MySQL avec migrations et mis en place l'authentification avec hashage. La sécurité en base, ça ne se rajoute pas à la fin.",
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
