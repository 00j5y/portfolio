"use client";

import { motion } from "framer-motion";
import { FiLinkedin } from "react-icons/fi";
import SectionTracker from "@/app/components/ui/SectionTracker";

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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Charlotte Dimpre */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                <img src="/charlotte_dimpre_logo.jpeg" alt="Charlotte Dimpre" className="w-full h-full object-cover" />
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

            <a
              href="https://www.linkedin.com/in/charlotte-dimpre/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              <FiLinkedin size={16} />
              Voir son profil LinkedIn
            </a>
          </motion.div>

          {/* Clément Berger */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                <img src="/clement_berger_logo.jpeg" alt="Clément Berger" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text">Clément Berger</h3>
                <p className="text-sm text-primary mt-0.5">Étudiant · BUT Informatique</p>
              </div>
            </div>

            <p className="text-muted leading-relaxed mb-6">
              Camarade avec qui j'ai collaboré sur deux projets SAE : une application de gestion
              pour le réseau de transport milanais en C#, et CampusGo, une plateforme de covoiturage en Laravel.
              Il peut attester de ma capacité à collaborer sur des projets complexes et de mon adaptabilité
              face à des stacks technologiques variées.
            </p>

            <a
              href="https://www.linkedin.com/in/clembgr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              <FiLinkedin size={16} />
              Voir son profil LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
