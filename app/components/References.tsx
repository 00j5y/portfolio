"use client";

import { motion } from "framer-motion";
import SectionTracker from "@/app/components/ui/SectionTracker";

export default function References() {
  return (
    <section id="references" className="py-24 bg-bg">
      <SectionTracker section="references" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Référence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Elle peut en témoigner
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto glass-card rounded-2xl p-8"
        >
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center text-primary font-bold text-2xl shrink-0">
              C
            </div>
            <div>
              <h3 className="text-xl font-bold text-text">Charlotte Dimpre</h3>
              <p className="text-sm text-primary mt-0.5">Auto-entrepreneuse · SEO</p>
            </div>
          </div>

          <p className="text-muted leading-relaxed mb-6">
            Tutrice lors de mon stage chez EI Charlotte Dimpre (Jan. – Mars 2026).
            Elle peut attester de mon travail sur la plateforme Konexx, de mon autonomie
            sur le projet et de ma capacité à livrer dans les délais en remote.
          </p>

          <p className="text-xs text-muted italic">Contact disponible sur demande</p>
        </motion.div>
      </div>
    </section>
  );
}
