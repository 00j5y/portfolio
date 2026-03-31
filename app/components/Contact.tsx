"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiDownload,
} from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: "contact@jaylheronde.fr",
    href: "mailto:contact@jaylheronde.fr",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "00j5y",
    href: "https://github.com/00j5y",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Jay L'héronde",
    href: "https://www.linkedin.com/in/jay-lheronde/",
  },
  {
    icon: FaDiscord,
    label: "Discord",
    value: "@8yz",
    href: "https://discord.com/users/613123580603138048",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Parlons-en
          </h2>
          <p className="text-muted mt-3 max-w-xl mx-auto text-sm">
            Disponible par tous ces moyens — je réponds rapidement.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                variants={item}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 hover:bg-primary-light/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted">{link.label}</p>
                  <p className="text-sm font-medium text-text truncate">{link.value}</p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bouton CV */}
        <div className="text-center mt-10">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            <FiDownload size={16} />
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
}
