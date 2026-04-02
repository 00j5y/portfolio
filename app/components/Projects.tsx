import { getGitHubRepos } from "@/app/lib/github";
import SectionTracker from "@/app/components/ui/SectionTracker";
import { FiExternalLink } from "react-icons/fi";
import ProjectCarousel from "@/app/components/ProjectCarousel";

export default async function Projects() {
  const repos = await getGitHubRepos("00j5y");

  return (
    <section id="projects" className="py-24 bg-bg overflow-hidden">
      <SectionTracker section="projects" />
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
          <ProjectCarousel repos={repos} />
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
