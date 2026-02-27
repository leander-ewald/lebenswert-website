import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Briefcase,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Check,
  UtensilsCrossed,
  Coffee,
  Mountain,
  Wrench,
  UsersRound,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Zukunftswerkstatt — Dein Weg in Ausbildung und Arbeit",
  description:
    "Du bist zwischen 18 und 35 und suchst einen Job? Die Zukunftswerkstatt Iserlohn hilft dir kostenlos mit Coaching, Bewerbungshilfe und Tagesstruktur. ESF Plus gefördert.",
  keywords: [
    "Zukunftswerkstatt Iserlohn",
    "Bewerbungshilfe Iserlohn",
    "Job finden Iserlohn",
    "Coaching Iserlohn",
    "ESF Plus Iserlohn",
  ],
};

const angebote = [
  {
    icon: Users,
    title: "Coaching & Beratung",
    text: "Wir finden gemeinsam heraus, was zu dir passt — beruflich und persönlich.",
  },
  {
    icon: Briefcase,
    title: "Bewerbung & Lebenslauf",
    text: "Wir erstellen deine Unterlagen, üben Vorstellungsgespräche und begleiten dich.",
  },
  {
    icon: Calendar,
    title: "Alltag & Struktur",
    text: "Wir helfen dir bei Tagesstruktur, Motivation und bei Behördengängen.",
  },
];

const formate = [
  {
    icon: UtensilsCrossed,
    name: "Cook & Talk",
    desc: "Gemeinsam kochen, ins Gespräch kommen — ganz ohne Druck.",
  },
  {
    icon: Coffee,
    name: "Zukunftscafé",
    desc: "Offener Treff zum Austauschen und Vernetzen.",
  },
  {
    icon: Mountain,
    name: "GetAwayDays",
    desc: "Raus aus dem Alltag — Erlebnisse, die stärken.",
  },
  {
    icon: Wrench,
    name: "Repair Café",
    desc: "Zusammen reparieren und handwerkliche Fähigkeiten entdecken.",
  },
  {
    icon: UsersRound,
    name: "Gruppenangebote",
    desc: "Workshops und Trainings in kleinen Gruppen.",
  },
];

const team = [
  { name: "Jacqueline Fritz", role: "Leitung Zukunftswerkstatt" },
  { name: "Angelika Skupin-Fröchte", role: "Beratung & Coaching" },
  { name: "Claudia Hein", role: "Pädagogische Fachkraft" },
  { name: "Ilka Espey", role: "Verwaltung" },
];

const fuerWen = [
  "Du bist zwischen 18 und 35 Jahre alt",
  "Du suchst einen Job oder eine Ausbildung",
  "Du hast mit Sucht oder Drogen zu kämpfen",
  "Du hast keinen festen Wohnsitz",
  "Du brauchst Hilfe bei Bewerbungen oder Behörden",
  "Du wünschst dir mehr Struktur und Halt im Alltag",
  "Du weißt einfach nicht mehr weiter",
];

export default function Zukunftswerkstatt() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-600 to-orange-500 text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
              ESF Plus gefördert
            </span>
            <span className="text-sm text-white/80">
              Kostenlos & vertraulich
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Zukunftswerkstatt
          </h1>
          <p className="text-2xl sm:text-3xl font-bold opacity-90 mb-6">
            Dein Weg in Ausbildung und Arbeit
          </p>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mb-10 leading-relaxed">
            Du bist zwischen 18 und 35 und suchst einen Job?
            <br />
            Wir helfen dir — kostenlos und vertraulich.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:015152496870"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Termin vereinbaren
            </a>
            <a
              href="mailto:Alex.Breuker@bewegt-iserlohn.de"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              E-Mail schreiben
            </a>
          </div>
        </div>
      </section>

      {/* Was wir bieten */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4 text-center">
            Was wir bieten
          </h2>
          <p className="text-darkgray text-lg text-center max-w-2xl mx-auto mb-12">
            Individuelle Unterstützung — so, wie du sie brauchst.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            {angebote.map((item) => (
              <div
                key={item.title}
                className="bg-orange-50 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-anthrazit mb-3">
                  {item.title}
                </h3>
                <p className="text-darkgray leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formate */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4 text-center">
            Unsere Formate
          </h2>
          <p className="text-darkgray text-lg text-center max-w-2xl mx-auto mb-12">
            Mehr als nur Bewerbungstraining — wir bieten dir vielfältige Wege.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formate.map((f) => (
              <div
                key={f.name}
                className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                  <f.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-anthrazit mb-1">{f.name}</h3>
                  <p className="text-sm text-darkgray">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4 text-center">
            Für wen ist die Zukunftswerkstatt?
          </h2>
          <p className="text-darkgray text-lg text-center mb-10">
            Die Zukunftswerkstatt ist für dich, wenn:
          </p>

          <div className="space-y-4 mb-10">
            {fuerWen.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-lg text-anthrazit">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 rounded-2xl p-8 text-center">
            <p className="text-xl text-anthrazit leading-relaxed">
              Es ist egal, welchen Abschluss du hast.
              <br />
              Es ist egal, wie lange du schon suchst.
              <br />
              Es ist egal, was vorher war.
              <br />
              <strong className="text-orange-600">
                Wir fangen da an, wo du gerade stehst — ohne Vorurteile.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Erfolgsgeschichten */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-10">
            Erfolgsgeschichten
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm">
              <p className="text-xl text-anthrazit leading-relaxed italic mb-4">
                &ldquo;Ich wusste nicht, wie man eine Bewerbung schreibt. Nach 3
                Monaten bei der Zukunftswerkstatt hatte ich einen
                Ausbildungsplatz.&rdquo;
              </p>
              <p className="text-darkgray font-medium">— T., 23 Jahre</p>
            </div>
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm">
              <p className="text-xl text-anthrazit leading-relaxed italic mb-4">
                &ldquo;Die haben mir nicht nur bei der Bewerbung geholfen,
                sondern auch, wenn es mir schlecht ging. Das war wie eine zweite
                Familie.&rdquo;
              </p>
              <p className="text-darkgray font-medium">— M., 27 Jahre</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4 text-center">
            Unser Team
          </h2>
          <p className="text-darkgray text-lg text-center max-w-2xl mx-auto mb-12">
            Wir sind für dich da — persönlich und auf Augenhöhe.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="font-bold text-anthrazit">{person.name}</h3>
                <p className="text-sm text-darkgray">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt / So erreichst du uns */}
      <section id="kontakt" className="py-20 bg-anthrazit text-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Meld dich bei uns
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Kein Termin nötig. Ruf an, schreib uns oder komm einfach vorbei.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <a
              href="tel:015152496870"
              className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <Phone className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <p className="font-bold mb-1">Anrufen</p>
              <p className="text-gray-300">0151 52496870</p>
            </a>
            <a
              href="https://wa.me/4915152496870"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600/20 rounded-2xl p-6 hover:bg-green-600/30 transition-colors"
            >
              <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <p className="font-bold mb-1">WhatsApp</p>
              <p className="text-gray-300">Nachricht schreiben</p>
            </a>
            <a
              href="mailto:Alex.Breuker@bewegt-iserlohn.de"
              className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <Mail className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <p className="font-bold mb-1">E-Mail</p>
              <p className="text-gray-300 text-sm">E-Mail schreiben</p>
            </a>
            <a
              href="https://maps.google.com/?q=Biestein+8-10+58640+Iserlohn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <p className="font-bold mb-1">Vorbeikommen</p>
              <p className="text-gray-300 text-sm">
                Biestein 8-10, Iserlohn
              </p>
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            Mo–Fr, 9–17 Uhr. Du brauchst keinen Termin — komm einfach vorbei.
          </p>
        </div>
      </section>

      {/* Für Netzwerkpartner */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12">
            <p className="text-sm text-orange-600 font-semibold uppercase tracking-wider mb-3">
              Für Netzwerkpartner
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-anthrazit mb-4">
              Sie arbeiten im Jobcenter, bei einem Träger oder in der Beratung?
            </h2>
            <p className="text-darkgray text-lg mb-6 leading-relaxed">
              Vermitteln Sie Klienten an die Zukunftswerkstatt. Unser
              ESF-Plus-gefördertes Programm richtet sich an junge Männer
              zwischen 18 und 35 Jahren, die Unterstützung auf dem Weg in
              Ausbildung und Arbeit brauchen.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Individuelle Beratung und Coaching",
                "Bewerbungshilfe und Lebenslauferstellung",
                "Begleitung bei Behördengängen",
                "Gruppenangebote und Tagesstruktur",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange-600 shrink-0" />
                  <p className="text-darkgray">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:Alex.Breuker@bewegt-iserlohn.de"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 transition-colors"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:015152496870"
                className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                0151 52496870
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Förder-Hinweis */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-midgray uppercase tracking-wider font-medium mb-4">
            Gefördert durch
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-sm font-medium text-darkgray">
              🇪🇺 Europäische Union (ESF Plus)
            </span>
            <span className="text-sm font-medium text-darkgray">
              BMAS — Bundesministerium für Arbeit und Soziales
            </span>
            <span className="text-sm font-medium text-darkgray">
              Stadt Iserlohn
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
