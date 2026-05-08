"use client";

import { motion } from "framer-motion";
import SectionTracker from "@/app/components/ui/SectionTracker";

const stories = [
  {
    type: "Stage",
    typeColor: "bg-green-100 text-green-700",
    date: "Jan. – Mars 2026",
    title: "Konexx : Plateforme de mise en relation",
    company: "EI Charlotte Dimpre · Distanciel",
    context:
      "Charlotte Dimpre m'a contacté pour travailler sur Konexx, une plateforme qui connecte clients et prestataires. Trois mois en remote, en autonomie complète.",
    work:
      "J'ai construit le frontend avec Next.js, branché la base de données Supabase et containerisé l'application avec Docker pour le déploiement. Du premier composant à la mise en prod.",
    stack: ["Next.js", "Supabase", "Docker", "TypeScript"],
    results:
      "Plateforme livrée en production, accessible en ligne. Ce que je referais différemment : mieux cadrer les specs dès le départ plutôt que d'itérer sur des ambiguïtés en cours de route.",
    proofLabel: "Voir le site",
    link: "https://konexx.fr/",
    images: [
      { src: "/konexx-hero.png", pos: "object-top", caption: "Interface publique — mise en relation clients et prestataires" },
      { src: "/konexx-crm.png", pos: "object-top", caption: "Dashboard CRM admin — accès sécurisés via RLS Supabase" },
    ],
  },
  {
    type: "Projet perso",
    typeColor: "bg-violet-100 text-violet-700",
    date: "2025 – 2026",
    title: "ai-mail-assistant : Résumé Gmail par IA",
    company: "Projet personnel",
    context:
      "Trier mes mails Gmail tous les matins me coûtait un temps que je ne voulais plus y mettre.",
    work:
      "J'ai construit un outil qui se connecte à Gmail via IMAP, analyse les emails, génère un résumé quotidien avec Gemini 2.5 Flash et me l'envoie en DM Discord. Déployable en une commande avec Docker.",
    stack: ["TypeScript", "Gemini API", "Gmail IMAP", "Discord bot", "Docker"],
    results:
      "4 étoiles sur GitHub. Le script tourne chaque jour à 11h. Je ne trie plus mes mails à la main.",
    proofLabel: "Voir sur GitHub",
    link: "https://github.com/00j5y/ai-mail-assistant",
    images: [
      { src: "/aimail-discord.png", pos: "object-top", fit: "object-cover", caption: "Résumé quotidien livré en DM Discord, catégorisé par priorité" },
      { src: "/aimail-terminal.png", pos: "object-center", bg: "bg-gray-900", fit: "object-contain", caption: "Bot en production — tourne chaque jour à 11h depuis janvier 2026" },
    ],
  },
  {
    type: "SAE BUT",
    typeColor: "bg-blue-100 text-blue-700",
    date: "S3 · Fin 2025 – Déb. 2026",
    title: "CampusGo : Plateforme de covoiturage",
    company: "IUT d'Amiens · Projet S3",
    context:
      "Situation d'Apprentissage et d'Évaluation du semestre 3. Construire une plateforme de covoiturage fonctionnelle, en équipe, dans un délai contraint.",
    work:
      "Backend en Laravel avec PHP, frontend en Blade + Vite, base de données MySQL avec migrations. Authentification, gestion de profils, création et réservation de trajets.",
    stack: ["Laravel", "PHP", "MySQL", "Vite", "Node.js"],
    results:
      "Projet rendu dans les délais. Le moteur de recherche avec carte et le filtrage multi-critères ont bien tenu. Ce que je referais différemment : poser le schéma de base de données avant de toucher aux vues.",
    proofLabel: "Voir sur GitHub",
    link: "https://github.com/00j5y/campusgo",
    images: [
      { src: "/campusgo-home.png", pos: "object-top", caption: "Page d'accueil — plateforme de covoiturage pour l'IUT d'Amiens" },
      { src: "/campusgo-search.png", pos: "object-center", caption: "Moteur de recherche avec carte et filtrage multi-critères" },
    ],
  },
];

export default function Narrative() {
  return (
    <section id="narrative" className="py-24 bg-bg">
      <SectionTracker section="narrative" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Réalisations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Mes projets en détail
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Trois projets construits de A à Z : ce que j&apos;ai résolu, comment, et ce que ça a donné.
          </p>
        </div>

        <div className="space-y-8">
          {stories.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${story.typeColor}`}>
                  {story.type}
                </span>
                <span className="text-xs text-muted">{story.date}</span>
              </div>

              <h3 className="text-xl font-bold text-text mb-1">{story.title}</h3>
              <p className="text-sm text-muted mb-6">{story.company}</p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Contexte
                  </p>
                  <p className="text-sm text-muted leading-relaxed">{story.context}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Ce que j&apos;ai fait
                  </p>
                  <p className="text-sm text-muted leading-relaxed">{story.work}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Résultats
                  </p>
                  <p className="text-sm text-muted leading-relaxed">{story.results}</p>
                </div>
              </div>

              {"images" in story && story.images && (
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {(story.images as { src: string; pos: string; bg?: string; fit?: string; caption?: string }[]).map(({ src, pos, bg, fit, caption }) => (
                    <div key={src} className="flex flex-col gap-1.5">
                      <div className={`aspect-video overflow-hidden rounded-xl border border-border ${bg ?? ""}`}>
                        <img src={src} alt={story.title} className={`w-full h-full ${fit ?? "object-cover"} ${pos}`} />
                      </div>
                      {caption && <p className="text-xs text-muted text-center leading-snug">{caption}</p>}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap gap-2">
                  {story.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary-light text-primary border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {story.link ? (
                  <a
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs font-medium text-primary hover:text-primary-dark transition-colors"
                  >
                    {story.proofLabel} →
                  </a>
                ) : (
                  <span className="ml-auto text-xs text-muted italic">{story.proofLabel}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
