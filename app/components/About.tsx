import SectionTracker from "@/app/components/ui/SectionTracker";

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <SectionTracker section="about" />
      <div className="max-w-6xl mx-auto px-6">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            À propos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Qui suis-je ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              En deuxième année de BUT Informatique à l&apos;IUT d&apos;Amiens, je code pas mal de
              mon temps libre. Des projets perso, des trucs pour automatiser ce que je fais à la
              main, parfois juste pour voir si c&apos;est faisable.
            </p>
            <p>
              Ce que j&apos;aime dans le dev, c&apos;est partir d&apos;une idée qui tient en une
              phrase et finir avec quelque chose qui tourne. Pas forcément parfait, mais qui fait
              ce qu&apos;il est censé faire.
            </p>
            <p>
              Je cherche une alternance pour septembre 2026, principalement en Île-de-France. Basé à Amiens.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Me contacter
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* Photo */}
          <div className="w-full aspect-square rounded-3xl bg-primary flex items-center justify-center select-none max-w-64 mx-auto md:max-w-none">
            <span className="text-white/80 text-sm font-medium">Photo à venir</span>
          </div>
        </div>
      </div>
    </section>
  );
}
