import { FiCode, FiCpu, FiSettings } from "react-icons/fi";

const categories = [
  {
    icon: FiCode,
    title: "Développement web",
    items: [
      "Interfaces React / Next.js",
      "APIs REST",
      "Bases de données relationnelles",
      "TypeScript strict",
      "Responsive & accessibilité",
    ],
  },
  {
    icon: FiCpu,
    title: "Automatisation & IA",
    items: [
      "Scripts Python",
      "Intégration d'APIs LLM",
      "Pipelines de traitement de données",
      "Bots & agents autonomes",
    ],
  },
  {
    icon: FiSettings,
    title: "Outils & DevOps",
    items: [
      "Git & GitHub (branches, PRs)",
      "Docker & conteneurisation",
      "Linux en ligne de commande",
      "CI/CD (GitHub Actions)",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Compétences
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Ce que je sais faire
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="glass-card rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-text mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
