const stats = [
  { value: "2+", label: "ans de code" },
  { value: "X", label: "projets réalisés" },
  { value: "BUT 2", label: "Informatique" },
];

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
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
            >
              Me contacter
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 flex flex-col gap-1"
              >
                <span className="text-4xl font-bold gradient-text">{stat.value}</span>
                <span className="text-muted text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
