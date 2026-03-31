"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiStar, FiGitBranch, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { GitHubRepo } from "@/app/lib/github";

const LANG_COLORS: Record<string, string> = {
  TypeScript:  "bg-blue-100 text-blue-700",
  JavaScript:  "bg-yellow-100 text-yellow-700",
  Python:      "bg-green-100 text-green-700",
  Rust:        "bg-orange-100 text-orange-700",
  Go:          "bg-cyan-100 text-cyan-700",
  PHP:         "bg-indigo-100 text-indigo-700",
  CSS:         "bg-pink-100 text-pink-700",
  HTML:        "bg-red-100 text-red-700",
  Shell:       "bg-gray-100 text-gray-700",
  C:           "bg-slate-100 text-slate-700",
};

const CARD_WIDTH = 340;
const CARD_GAP = 24;

function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const langColor = repo.language
    ? LANG_COLORS[repo.language] ?? "bg-primary-light text-primary"
    : null;

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className="group glass-card rounded-2xl p-6 flex flex-col gap-4 shrink-0 cursor-pointer"
      style={{ width: CARD_WIDTH }}
    >
      {/* En-tête */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-text group-hover:text-primary transition-colors truncate">
          {repo.name}
        </h3>
        <FiExternalLink
          className="shrink-0 text-muted group-hover:text-primary transition-colors"
          size={16}
        />
      </div>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed line-clamp-3 flex-1">
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
      <div className="flex items-center gap-4 text-xs text-muted pt-2 border-t border-border">
        {langColor && (
          <span className={`px-2 py-0.5 rounded-full font-medium ${langColor}`}>
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1 ml-auto">
          <FiStar size={12} />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <FiGitBranch size={12} />
          {repo.forks_count}
        </span>
      </div>
    </motion.a>
  );
}

export default function ProjectCarousel({ repos }: { repos: GitHubRepo[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const max = repos.length - 1;

  const scrollTo = (i: number) => {
    const clamped = Math.max(0, Math.min(i, max));
    setIndex(clamped);
    trackRef.current?.scrollTo({
      left: clamped * (CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Track scrollable */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Padding gauche pour centrer sur mobile */}
        <div className="shrink-0 w-4 md:w-0" />
        {repos.map((repo, i) => (
          <RepoCard key={repo.id} repo={repo} index={i} />
        ))}
        <div className="shrink-0 w-4 md:w-0" />
      </div>

      {/* Boutons de navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => scrollTo(index - 1)}
          disabled={index === 0}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Précédent"
        >
          <FiChevronLeft size={18} />
        </button>

        {/* Indicateurs */}
        <div className="flex gap-1.5">
          {repos.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Projet ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                i === index
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-border hover:bg-primary/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => scrollTo(index + 1)}
          disabled={index === max}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Suivant"
        >
          <FiChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
