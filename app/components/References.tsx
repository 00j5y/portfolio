"use client";

import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import SectionTracker from "@/app/components/ui/SectionTracker";

const references = [
  {
    name: "Charlotte Dimpre",
    role: "Auto-entrepreneuse · SEO",
    context:
      "Tutrice lors de mon stage chez EI Charlotte Dimpre (Jan. – Mars 2026). Elle peut attester de mon travail sur la plateforme Konexx et de mon autonomie sur le projet.",
    contact: null,
  },
];

export default function References() {
  return (
    <section id="references" className="py-24 bg-bg">
      <SectionTracker section="references" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Références
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Ils peuvent en témoigner
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          {references.map((ref, i) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary font-bold text-lg shrink-0">
                  {ref.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text">{ref.name}</h3>
                  <p className="text-xs text-primary mb-3">{ref.role}</p>
                  <p className="text-sm text-muted leading-relaxed">{ref.context}</p>
                  {ref.contact ? (
                    <a
                      href={`mailto:${ref.contact}`}
                      className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-primary hover:text-primary-dark transition-colors"
                    >
                      <FiMail size={13} />
                      {ref.contact}
                    </a>
                  ) : (
                    <p className="mt-3 text-xs text-muted italic">Contact disponible sur demande</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
