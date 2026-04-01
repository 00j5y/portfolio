import { FiLayout, FiServer, FiTerminal, FiBox } from "react-icons/fi";

const categories = [
  {
    icon: FiLayout,
    title: "Développement Front-end",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: FiServer,
    title: "Backend & Base de Données",
    items: ["Node.js", "PHP", "PostgreSQL", "MySQL", "Supabase"],
  },
  {
    icon: FiTerminal,
    title: "Langages de Programmation",
    items: ["TypeScript / JavaScript", "Python", "PHP", "C", "SQL"],
  },
  {
    icon: FiBox,
    title: "Architecture & Méthodologies",
    items: ["Docker & virtualisation", "Git & versionnage", "Linux", "Agile / Scrum"],
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

        <div className="grid sm:grid-cols-2 gap-6">
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
