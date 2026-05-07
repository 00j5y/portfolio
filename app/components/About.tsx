import { FiActivity, FiMusic, FiShoppingBag } from "react-icons/fi";
import SectionTracker from "@/app/components/ui/SectionTracker";

const passions = [
  {
    icon: FiActivity,
    title: "Musculation",
    text: "5 séances par semaine. Je lis des études pour progresser efficacement, pas juste les forums. Ce que ça m'a appris sur la discipline, je le retrouve dans la façon dont j'aborde le code.",
  },
  {
    icon: FiMusic,
    title: "Musique & production",
    text: "Beaucoup de concerts, des styles très variés. Je produis des instrumentaux sur FL Studio et j'enregistre en studio avec un ami ingénieur son. J'écoute beaucoup, je crée un peu, j'apprends encore.",
  },
  {
    icon: FiShoppingBag,
    title: "Mode",
    text: "Je suis les fashion weeks de près, surtout les marques asiatiques. J'aime le layering, les superpositions qui changent le rendu d'une tenue. Je travaille sur ma propre marque de prêt-à-porter.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface">
      <SectionTracker section="about" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            À propos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text mt-2">
            Qui suis-je ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Texte */}
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              En deuxième année de BUT Informatique à l&apos;IUT d&apos;Amiens, spécialité
              Réalisation d&apos;Applications : Conception et Architecture. Je code depuis le lycée,
              d&apos;abord pour comprendre comment ça marche, maintenant parce que c&apos;est devenu
              ma façon de résoudre les problèmes.
            </p>
            <p>
              Ce que j&apos;aime dans le dev, c&apos;est l&apos;aller-retour entre l&apos;idée et
              l&apos;exécution. Partir d&apos;une phrase, finir avec quelque chose qui tourne. Pas
              forcément parfait, mais qui fait ce qu&apos;il est censé faire.
            </p>
            <p>
              La discipline, je l&apos;ai apprise à la salle. Cinq séances par semaine, je lis des
              études pour progresser efficacement. J&apos;applique la même logique au code :
              mesurer, comprendre le pourquoi, itérer.
            </p>
            <p>
              Mon seul défaut avouable : je passe trop de temps à peaufiner l&apos;interface alors
              que la logique est bouclée depuis un moment. Perfectionnisme, j&apos;assume.
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

        {/* Passions */}
        <div className="grid sm:grid-cols-3 gap-4">
          {passions.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass-card rounded-2xl p-5">
              <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-3">
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-text text-sm mb-1">{title}</h3>
              <p className="text-xs text-muted leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
