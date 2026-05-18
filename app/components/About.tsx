import { FiActivity, FiShoppingBag } from "react-icons/fi";
import SectionTracker from "@/app/components/ui/SectionTracker";

const passions = [
  {
    icon: FiActivity,
    title: "Musculation",
    text: "5 séances par semaine, parce que c'est pas facile et que c'est pour ça que ça compte. Je lis les études plutôt que de suivre les gourous. Ce que j'ai appris là, c'est que faire les choses bien demande de la discipline face à ce qui repousse. J'applique la même logique au code : finir une feature même quand c'est laborieux, mesurer avant d'optimiser, itérer.",
  },
  {
    icon: FiShoppingBag,
    title: "Mode",
    text: "Je conçois des vêtements, et quand tu construis une marque, tu crées un univers : une ambiance, une palette, un message qui marque. C'est exactement ce que je fais sur chaque site web. Pas de copie des tendances. Une identité unique, une vraie présence. La même logique appliquée à deux domaines : créer une expérience qui reste.",
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
          <div className="w-full aspect-square rounded-3xl overflow-hidden max-w-64 mx-auto md:max-w-none">
            <img src="/photo.jpg" alt="Jay L'héronde" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Passions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
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

        {/* Citation */}
        <figure className="mt-16 max-w-3xl mx-auto text-center">
          <span className="block text-6xl text-primary/20 font-serif leading-none mb-4">&ldquo;</span>
          <blockquote className="text-lg sm:text-xl text-text font-medium leading-relaxed italic mb-6">
            Do whatever you want to do in the morning, the thing that makes your heart pound out of joy,
            and keeps your mind at ease.
          </blockquote>
          <figcaption className="text-sm text-muted">
            Osamason <span className="text-muted/50">(Amari Deshawn Adham Middleton)</span> · 2024
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
