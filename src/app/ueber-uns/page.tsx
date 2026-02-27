import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  ArrowRight,
  Users,
  Calendar,
  MapPin,
  Target,
  Handshake,
  Shield,
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

      {/* Unsere Werte */}
      <section className="py-20 bg-white">
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

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4 text-center">
            Unser Team
          </h2>
          <p className="text-darkgray text-lg text-center max-w-2xl mx-auto mb-12">
            Menschen, die mit Herzblut für ein lebenswertes Iserlohn arbeiten.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sönke Kühl", role: "Vorstand" },
              { name: "Alex Breuker", role: "Sozialmanager" },
              { name: "Jacqueline Fritz", role: "Leitung Zukunftswerkstatt" },
              { name: "Angelika Skupin-Fröchte", role: "Beratung & Coaching" },
              { name: "Claudia Hein", role: "Pädagogische Fachkraft" },
              { name: "Ilka Espey", role: "Verwaltung" },
            ].map((person) => (
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

      {/* Partner & Förderer */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4">
            Partner & Förderer
          </h2>
          <p className="text-darkgray text-lg max-w-2xl mx-auto mb-12">
            Unsere Arbeit wird möglich durch die Unterstützung von:
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "🇪🇺 Europäische Union (ESF Plus)",
              "BMAS — Bundesministerium für Arbeit und Soziales",
              "Stadt Iserlohn",
              "Sparkasse Iserlohn",
            ].map((partner) => (
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Teil von LebensWERT werden
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Ob als Spender, Mitglied oder Ehrenamtliche — es gibt viele Wege,
            sich einzubringen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/unterstuetzen"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-colors"
            >
              <Heart className="w-5 h-5" />
              Unterstützen
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Kontakt aufnehmen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
