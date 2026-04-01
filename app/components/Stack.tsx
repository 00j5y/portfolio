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
  { icon: SiReact,       label: "React" },
  { icon: SiNextdotjs,   label: "Next.js" },
  { icon: SiTypescript,  label: "TypeScript" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiPhp,         label: "PHP" },
  { icon: SiPython,      label: "Python" },
  { icon: SiC,           label: "C" },
  { icon: SiNodedotjs,   label: "Node.js" },
  { icon: SiBun,         label: "Bun" },
  { icon: SiDocker,      label: "Docker" },
  { icon: SiSupabase,    label: "Supabase" },
  { icon: SiGithub,      label: "GitHub" },
  { icon: SiMysql,       label: "MySQL" },
  { icon: SiPostgresql,  label: "PostgreSQL" },
];

// Largeur fixe par item : 14 × 200px = 2800px > tout écran (jusqu'à 2K)
const ITEM_W = 200;

export default function Stack() {
  const shift = techs.length * ITEM_W;

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

      <div className="overflow-hidden">
        <div
          className="flex animate-marquee"
          style={{ "--marquee-shift": `${shift}px` } as React.CSSProperties}
        >
          {[...techs, ...techs].map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={i}
                style={{ width: ITEM_W }}
                className="flex flex-col items-center gap-3 group shrink-0"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-2xl sm:text-3xl text-muted group-hover:text-primary group-hover:border-primary-light group-hover:bg-primary-light transition-all duration-200">
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
