import { getGitHubRepos, type GitHubRepo } from "@/app/lib/github";
import { FiStar, FiGitBranch, FiExternalLink } from "react-icons/fi";

const LANG_COLORS: Record<string, string> = {
  TypeScript:  "bg-blue-100 text-blue-700",
  JavaScript:  "bg-yellow-100 text-yellow-700",
  Python:      "bg-green-100 text-green-700",
  Rust:        "bg-orange-100 text-orange-700",
  Go:          "bg-cyan-100 text-cyan-700",
  CSS:         "bg-pink-100 text-pink-700",
  HTML:        "bg-red-100 text-red-700",
  Shell:       "bg-gray-100 text-gray-700",
};

function RepoCard({ repo }: { repo: GitHubRepo }) {
  const langColor = repo.language
    ? LANG_COLORS[repo.language] ?? "bg-primary-light text-primary"
    : null;

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group glass-card rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300"
    >
      {/* En-tête */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-text group-hover:text-primary transition-colors truncate">
          {repo.name}
        </h3>
        <FiExternalLink className="shrink-0 text-muted group-hover:text-primary transition-colors" size={16} />
      </div>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed line-clamp-2 flex-1">
        {repo.description}
      </p>

      {/* Topics */}
      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {repo.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 rounded-full text-xs bg-primary-light text-primary"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Méta */}
      <div className="flex items-center gap-4 text-xs text-muted pt-1 border-t border-border">
        {langColor && (
          <span className={`px-2 py-0.5 rounded-full font-medium ${langColor}`}>
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <FiStar size={12} />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <FiGitBranch size={12} />
          {repo.forks_count}
        </span>
      </div>
    </a>
  );
}

export default async function Projects() {
  const repos = await getGitHubRepos("00j5y");

  return (
    <section id="projects" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Projets
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Ce que j&apos;ai construit
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto text-sm">
            Projets récents depuis GitHub — mis à jour automatiquement.
          </p>
        </div>

        {repos.length === 0 ? (
          <p className="text-center text-muted">Impossible de charger les projets.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="https://github.com/00j5y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
          >
            Voir tous mes projets sur GitHub
            <FiExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
