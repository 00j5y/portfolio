"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPhp,
  SiPython,
  SiC,
  SiNodedotjs,
  SiBun,
  SiDocker,
  SiSupabase,
  SiGithub,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const techs = [
  { icon: SiReact,      label: "React" },
  { icon: SiNextdotjs,  label: "Next.js" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTailwindcss,label: "Tailwind CSS" },
  { icon: SiPhp,        label: "PHP" },
  { icon: SiPython,     label: "Python" },
  { icon: SiC,          label: "C" },
  { icon: SiNodedotjs,  label: "Node.js" },
  { icon: SiBun,        label: "Bun" },
  { icon: SiDocker,     label: "Docker" },
  { icon: SiSupabase,   label: "Supabase" },
  { icon: SiGithub,     label: "GitHub" },
  { icon: SiMysql,      label: "MySQL" },
  { icon: SiPostgresql, label: "PostgreSQL" },
];

// Duplicated for seamless infinite loop
const items = [...techs, ...techs];

export default function Stack() {
  return (
    <section id="stack" className="py-16 bg-bg border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <span className="text-sm font-medium text-primary uppercase tracking-widest">
          Technologies
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-2">
          Ma stack technique
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-x-hidden">
        <div className="flex animate-marquee w-fit">
          {items.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.label}-${i}`}
                className="flex flex-col items-center gap-3 group w-20 sm:w-24 shrink-0"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-2xl sm:text-3xl text-muted group-hover:text-primary group-hover:border-primary-light group-hover:bg-primary-light transition-all duration-200 shrink-0">
                  <Icon />
                </div>
                <span className="text-xs text-muted group-hover:text-primary transition-colors whitespace-nowrap">
                  {tech.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
