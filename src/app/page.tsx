import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ArrowRight,
  Users,
  Briefcase,
  Calendar,
  HandHeart,
  Check,
} from "lucide-react";

const projekte = [
  {
    name: "Zukunftswerkstatt",
    desc: "Coaching & Bewerbungshilfe für junge Männer 18–35",
    color: "bg-orange-600",
    logo: "/logos/zukunftswerkstatt.png",
    href: "/zukunftswerkstatt",
  },
  {
    name: "Checkpoint",
    desc: "Jugendcafé mit Kreativ- und Bildungsangeboten",
    color: "bg-proj-checkpoint",
    logo: "/logos/checkpoint.jpg",
    href: "#",
  },
  {
    name: "Lichtblick",
    desc: "Kinder- & Familienarbeit, Hausaufgabenhilfe",
    color: "bg-proj-lichtblick",
    logo: null,
    href: "#",
  },
  {
    name: "Frohet Schaffen",
    desc: "Sozialer Coworking Space & Netzwerk",
    color: "bg-proj-schaffen",
    logo: "/logos/frohet-schaffen.png",
    href: "#",
  },
  {
    name: "Frohet Viertel",
    desc: "Quartiersentwicklung südliche Innenstadt",
    color: "bg-proj-viertel",
    logo: "/logos/frohet-viertel.png",
    href: "#",
  },
  {
    name: "Culture Station",
    desc: "Kulturveranstaltungen & Open-Air",
    color: "bg-proj-culture",
    logo: "/logos/culture-station.png",
    href: "#",
  },
  {
    name: "Lebenslauf",
    desc: "Jährlicher Spendenlauf für den Verein",
    color: "bg-proj-lebenslauf",
    logo: null,
    href: "#",
  },
];

const impact = [
  { number: "Seit 2015", label: "engagiert für Iserlohn" },
  { number: "7", label: "Projekte unter einem Dach" },
  { number: "80+", label: "Menschen jährlich begleitet" },
  { number: "1", label: "Quartier, 1.000 Nachbarn" },
];

const testimonials = [
  {
    quote:
      "Ich wusste nicht, wie man eine Bewerbung schreibt. Nach 3 Monaten bei der Zukunftswerkstatt hatte ich einen Ausbildungsplatz.",
    name: "T., 23 Jahre",
  },
  {
    quote:
      "Ich war in einer schwierigen Phase — Drogen, kein Job, keine Perspektive. Die Zukunftswerkstatt hat mir geholfen, da rauszukommen. Heute habe ich eine feste Stelle.",
    name: "K., 29 Jahre",
  },
  {
    quote:
      "Die haben mir nicht nur bei der Bewerbung geholfen, sondern auch, wenn es mir schlecht ging. Das war wie eine zweite Familie.",
    name: "M., 27 Jahre",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-orange-50 via-white to-warmgray pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              LebensWERT Iserlohn e.V.
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-anthrazit leading-tight mb-6">
              Gemeinsam für ein{" "}
              <span className="text-orange-600">lebenswertes</span> Iserlohn
            </h1>
            <p className="text-lg sm:text-xl text-darkgray leading-relaxed mb-10 max-w-2xl">
              Seit 2015 stärken wir Menschen in der südlichen Innenstadt —
              mit Coaching, Bildung, Gemeinschaft und einem offenen Ohr.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/zukunftswerkstatt"
                className="flex items-center justify-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20"
              >
                Ich brauche Unterstützung
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/unterstuetzen"
                className="flex items-center justify-center gap-3 bg-anthrazit text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-darkgray transition-colors"
              >
                <Heart className="w-5 h-5" />
                Ich möchte helfen
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-100/40 to-transparent hidden lg:block" />
      </section>

      {/* Zukunftswerkstatt Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                ESF Plus gefördert
              </span>
              <span className="text-sm text-darkgray">
                Kostenlos & vertraulich
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4">
              Zukunftswerkstatt — Dein Weg in Arbeit
            </h2>
            <p className="text-lg text-darkgray mb-8 max-w-2xl">
              Du bist zwischen 18 und 35 und suchst einen Job oder eine
              Ausbildung? Wir helfen dir — mit Coaching, Bewerbungshilfe und
              einem Plan für deine Zukunft.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: Users,
                  title: "Coaching & Beratung",
                  text: "Wir finden gemeinsam heraus, was zu dir passt.",
                },
                {
                  icon: Briefcase,
                  title: "Bewerbung & Lebenslauf",
                  text: "Wir erstellen deine Unterlagen und üben Gespräche.",
                },
                {
                  icon: Calendar,
                  title: "Alltag & Struktur",
                  text: "Wir helfen dir bei Tagesstruktur und Motivation.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <item.icon className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-bold text-anthrazit mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-darkgray">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/zukunftswerkstatt"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 transition-colors"
              >
                Mehr erfahren
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:015152496870"
                className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors"
              >
                Termin vereinbaren: 0151 52496870
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Win-Win Partnerschaft */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-anthrazit rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/3 flex justify-center">
              <Image
                src="/logos/winwin-winwin_logo_rgb_internet.png"
                alt="Win-Win Partnerschaft"
                width={280}
                height={280}
                className="w-48 sm:w-64 lg:w-72"
              />
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-3">
                Win-Win für alle
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Gemeinsam gewinnen
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Bei LebensWERT profitieren alle: Teilnehmer finden ihren Weg in
                Arbeit, Unternehmen gewinnen motivierte Mitarbeiter, und das
                Quartier wird lebenswerter. Unsere Projekte verbinden Menschen
                und schaffen echte Perspektiven — für jeden Beteiligten.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="bg-white/10 rounded-xl px-5 py-3 text-white text-sm font-medium">
                  Teilnehmer → Ausbildung & Job
                </div>
                <div className="bg-white/10 rounded-xl px-5 py-3 text-white text-sm font-medium">
                  Unternehmen → Fachkräfte
                </div>
                <div className="bg-white/10 rounded-xl px-5 py-3 text-white text-sm font-medium">
                  Quartier → Gemeinschaft
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projekte Grid */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4">
              Unsere Projekte
            </h2>
            <p className="text-darkgray text-lg max-w-2xl mx-auto">
              Sieben Projekte, ein Ziel: Menschen stärken und Nachbarschaft
              leben.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projekte.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                  {p.logo ? (
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain"
                    />
                  ) : (
                    <div
                      className={`w-16 h-16 ${p.color} rounded-xl flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-lg">
                        {p.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-anthrazit mb-1 group-hover:text-orange-600 transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-darkgray">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-anthrazit text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
            Unsere Wirkung
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-2">
                  {item.number}
                </p>
                <p className="text-sm sm:text-base text-gray-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — 3 in einer Reihe */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-12 text-center">
            Das sagen unsere Teilnehmer
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-orange-50 rounded-3xl p-8 flex flex-col"
              >
                <p className="text-lg text-anthrazit leading-relaxed italic mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-darkgray font-medium">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spenden CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HandHeart className="w-12 h-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Gemeinsam mehr bewegen
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Schon ab 1&nbsp;€ im Monat machen Sie den Unterschied. Ihre Spende
            kommt direkt bei den Menschen in Iserlohn an.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["5 €", "10 €", "25 €", "50 €"].map((amount) => (
              <span
                key={amount}
                className="bg-white/20 text-white font-bold px-6 py-3 rounded-xl text-lg backdrop-blur-sm"
              >
                {amount}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/unterstuetzen"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Jetzt spenden
            </Link>
            <Link
              href="/unterstuetzen#mitglied"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Mitglied werden — ab 1 €/Monat
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm opacity-80">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4" /> Gemeinnützig
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4" /> Spendenbescheinigung
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4" /> Steuerlich absetzbar
            </span>
          </div>
        </div>
      </section>

      {/* Förder-Logos */}
      <section className="py-12 bg-warmgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-midgray text-center mb-6 uppercase tracking-wider font-medium">
            Gefördert & unterstützt durch
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <Image
              src="/logos/esf-bmas_eu_foerderlogo.png"
              alt="BMAS & EU ESF Plus Förderlogo"
              width={200}
              height={80}
              className="h-16 w-auto"
            />
            <Image
              src="/logos/winwin-winwin_logo_rgb_internet.png"
              alt="Win-Win"
              width={100}
              height={100}
              className="h-14 w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
