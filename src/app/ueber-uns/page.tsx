import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ArrowRight,
  Users,
  Calendar,
  MapPin,
  Target,
  Handshake,
  Shield,
  Play,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns — LebensWERT Iserlohn e.V.",
  description:
    "Seit 2015 stärkt LebensWERT Iserlohn e.V. Menschen in der südlichen Innenstadt — mit 7 Projekten, einem engagierten Team und viel Herzblut.",
};

const timeline = [
  {
    year: "2015",
    title: "Gründung",
    text: "LebensWERT Iserlohn e.V. wird gegründet — mit dem Ziel, Menschen in der südlichen Innenstadt zu stärken.",
  },
  {
    year: "2016",
    title: "Checkpoint eröffnet",
    text: "Das Jugendcafé Checkpoint öffnet seine Türen — ein sicherer Ort für junge Menschen.",
  },
  {
    year: "2018",
    title: "Lichtblick startet",
    text: "Kinder- und Familienarbeit mit Hausaufgabenhilfe und Kreativangeboten.",
  },
  {
    year: "2020",
    title: "Frohet Schaffen & Frohet Viertel",
    text: "Sozialer Coworking Space und Quartiersentwicklung in der südlichen Innenstadt.",
  },
  {
    year: "2023",
    title: "Zukunftswerkstatt",
    text: "ESF-Plus-gefördertes Coaching-Programm für junge Männer auf dem Weg in Arbeit.",
  },
  {
    year: "Heute",
    title: "7 Projekte, 1 Ziel",
    text: "Über 80 Menschen jährlich begleitet — und wir wachsen weiter.",
  },
];

const werte = [
  {
    icon: Heart,
    title: "Menschlichkeit",
    text: "Jeder Mensch verdient Respekt, Unterstützung und eine zweite Chance.",
  },
  {
    icon: Handshake,
    title: "Gemeinschaft",
    text: "Zusammen sind wir stärker — wir bauen Brücken und schaffen Begegnung.",
  },
  {
    icon: Target,
    title: "Wirkung",
    text: "Wir messen unsere Arbeit an echten Veränderungen im Leben der Menschen.",
  },
  {
    icon: Shield,
    title: "Vertrauen",
    text: "Vertraulichkeit und Verlässlichkeit sind die Basis unserer Arbeit.",
  },
];

const impact = [
  { number: "Seit 2015", label: "engagiert für Iserlohn" },
  { number: "7", label: "Projekte unter einem Dach" },
  { number: "80+", label: "Menschen jährlich begleitet" },
  { number: "1", label: "Quartier, 1.000 Nachbarn" },
];

export default function UeberUns() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-orange-50 via-white to-warmgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Über uns
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-anthrazit leading-tight mb-6">
              Ein Verein, viele Herzen
            </h1>
            <p className="text-lg sm:text-xl text-darkgray leading-relaxed">
              LebensWERT Iserlohn e.V. — das sind Menschen, die an ihre Stadt
              glauben. Seit 2015 schaffen wir Angebote, die stärken, verbinden
              und Perspektiven eröffnen.
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4 text-center">
            LebensWERT erleben
          </h2>
          <p className="text-darkgray text-lg text-center max-w-2xl mx-auto mb-10">
            Ein Einblick in unsere Arbeit und die Menschen, die LebensWERT ausmachen.
          </p>
          <div className="rounded-3xl overflow-hidden shadow-lg bg-anthrazit">
            <video
              controls
              preload="metadata"
              className="w-full aspect-video"
              poster=""
            >
              <source src="/ueber-uns-video-web.mp4" type="video/mp4" />
              Ihr Browser unterstützt kein Video.
            </video>
          </div>
        </div>
      </section>

      {/* Unsere Werte */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4 text-center">
            Unsere Werte
          </h2>
          <p className="text-darkgray text-lg text-center max-w-2xl mx-auto mb-12">
            Was uns antreibt und zusammenhält.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {werte.map((w) => (
              <div key={w.title} className="bg-orange-50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <w.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-anthrazit mb-2">{w.title}</h3>
                <p className="text-sm text-darkgray leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wirkung */}
      <section className="py-20 bg-anthrazit text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">
            Unsere Wirkung
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-orange-500 mb-2">
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

      {/* Geschichte / Timeline */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-12 text-center">
            Unsere Geschichte
          </h2>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-orange-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-anthrazit text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-darkgray leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4">
            Unser Team
          </h2>
          <p className="text-darkgray text-lg max-w-2xl mx-auto mb-8">
            Über 20 engagierte Menschen — Sozialarbeiter, Pädagogen, Erzieher
            und Ehrenamtliche — arbeiten täglich für ein lebenswertes Iserlohn.
          </p>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 transition-colors"
          >
            Das gesamte Team kennenlernen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Partner & Förderer */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4">
            Partner & Förderer
          </h2>
          <p className="text-darkgray text-lg max-w-2xl mx-auto mb-12">
            Unsere Arbeit wird möglich durch die Unterstützung von:
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mb-8">
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
            <Image
              src="/logos/versoehnung.png"
              alt="Ev. Versöhnungskirchengemeinde"
              width={120}
              height={80}
              className="h-14 w-auto"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Stadt Iserlohn", "Sparkasse Iserlohn"].map((partner) => (
              <span
                key={partner}
                className="bg-white px-6 py-3 rounded-xl text-darkgray font-medium shadow-sm"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Dual: Betroffene + Unterstützer */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Du brauchst Hilfe?
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Schwierige Phase, alles zu viel? Meld dich bei uns — kostenlos
                und vertraulich.
              </p>
              <a
                href="tel:015152496870"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                0151 52496870
              </a>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Sie möchten helfen?
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Ob als Spender, Mitglied oder Ehrenamtliche — es gibt viele
                Wege, sich einzubringen.
              </p>
              <Link
                href="/unterstuetzen"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors"
              >
                <Heart className="w-5 h-5" />
                Unterstützen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
