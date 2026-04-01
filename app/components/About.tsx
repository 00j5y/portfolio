export default function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            À propos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Qui suis-je ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              {/* Placeholder — à remplacer par Jay */}
              Étudiant en deuxième année de BUT Informatique, je me passionne pour le développement
              web et la création de solutions concrètes. Je passe une bonne partie de mon temps
              libre à coder des projets personnels et à explorer de nouvelles technologies.
            </p>
            <p>
              {/* Placeholder — à remplacer par Jay */}
              Ce qui me motive, c&apos;est de transformer une idée en produit fonctionnel — du
              premier commit au déploiement. J&apos;aime les interfaces propres, le code maintenable
              et les outils bien pensés.
            </p>
            <p>
              {/* Placeholder — à remplacer par Jay */}
              Je cherche une alternance à partir de [DATE] pour mettre mes compétences au service
              d&apos;une équipe technique et continuer à progresser en conditions réelles.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Me contacter
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-80 rounded-3xl glass-card border-2 border-dashed border-primary/30 flex flex-col items-center justify-center gap-3 text-muted select-none">
              <span className="text-5xl">🧑‍💻</span>
              <span className="text-xs text-center px-4 leading-relaxed">
                Photo à venir
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
