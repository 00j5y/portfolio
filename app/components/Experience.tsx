// Placeholder — à remplacer par Jay avec ses vraies expériences
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

const typeLabels: Record<string, string> = {
  formation: "Formation",
  job:       "Expérience",
  stage:     "Stage",
};

const typeColors: Record<string, string> = {
  formation: "bg-primary-light text-primary",
  job:       "bg-surface text-muted border border-border",
  stage:     "bg-green-100 text-green-700",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Parcours
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Mes expériences
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Ligne verticale */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <ol className="space-y-10 pl-12">
            {experiences.map((exp, i) => (
              <li key={i} className="relative">
                {/* Dot */}
                <span className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-primary border-2 border-bg" />

                {/* Card */}
                <div className="glass-card rounded-2xl p-5 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${typeColors[exp.type]}`}
                    >
                      {typeLabels[exp.type]}
                    </span>
                    <span className="text-xs text-muted">{exp.date}</span>
                  </div>
                  <h3 className="font-semibold text-text">{exp.role}</h3>
                  <p className="text-sm text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
