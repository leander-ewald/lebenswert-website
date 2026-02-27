import type { Metadata } from "next";
import Link from "next/link";
import { Users, ArrowRight, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Team — Die Menschen hinter LebensWERT",
  description:
    "Lernen Sie das Team von LebensWERT Iserlohn kennen — Vorstand, Mitarbeiter und Ehrenamtliche aus allen Projekten.",
};

const vorstand = [
  { name: "Daniel Schöning", role: "1. Vorsitzender" },
  { name: "Lukas Grigull", role: "2. Vorsitzender" },
  { name: "Leonie Engel-Busch", role: "Schatzmeisterin" },
  { name: "Verena Holzrichter", role: "Schriftführung & Öffentlichkeitsarbeit" },
  { name: "Mirjam Ellermann", role: "Pfarrerin, Ev. Versöhnungskirchengemeinde" },
  { name: "Sönke Kühl", role: "Vorsitzender des Kuratoriums" },
];

const hauptamtliche = [
  {
    name: "Alex Breuker",
    role: "Sozialarbeiter (B.A.)",
    bereich: "Frohet Viertel — Quartiersentwicklung",
    initials: "AB",
  },
  {
    name: "Jacqueline Fritz",
    role: "Int. Business & Management (B.A.)",
    bereich: "Leitung Zukunftswerkstatt",
    initials: "JF",
  },
  {
    name: "Angelika Skupin-Fröchte",
    role: "Pädagogin",
    bereich: "Zukunftswerkstatt — Beratung & Coaching",
    initials: "AS",
  },
  {
    name: "Claudia Hein",
    role: "Erzieherin",
    bereich: "Checkpoint Girlspower & Lichtblick Hausaufgabenhilfe",
    initials: "CH",
  },
  {
    name: "Ilka-Kristin Espey",
    role: "Verwaltungskraft",
    bereich: "Zukunftswerkstatt — Verwaltung",
    initials: "IE",
  },
  {
    name: "Jason Pankrat",
    role: "Sozialarbeiter (B.A.)",
    bereich: "Medienmobil",
    initials: "JP",
  },
  {
    name: "Jonte Schlagner",
    role: "Diakon, Erzieher",
    bereich: "Frohet Schaffen & Checkpoint Petersstraße",
    initials: "JS",
  },
  {
    name: "Simon Tügel",
    role: "Erzieher",
    bereich: "Checkpoint — Offene Tür, Daytrip, Camp",
    initials: "ST",
  },
  {
    name: "Ahmad Alabbas",
    role: "angehender Sozialarbeiter",
    bereich: "Frohet Viertel & Checkpoint",
    initials: "AA",
  },
  {
    name: "Ailin Monti",
    role: "Erzieherin (angehende Sozialarbeiterin)",
    bereich: "Checkpoint — Daytrip, Camp",
    initials: "AM",
  },
  {
    name: "Gianna Cortina",
    role: "angehende Sozialarbeiterin/Gemeindepädagogin",
    bereich: "Community Education",
    initials: "GC",
  },
  {
    name: "Michael Frank",
    role: "Diakon, Leiter",
    bereich: "Sozialzentrum Lichtblick",
    initials: "MF",
  },
  {
    name: "Mahmud Khan Fahad",
    role: "Koch",
    bereich: "Sozialzentrum Lichtblick",
    initials: "MK",
  },
];

export default function Team() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-orange-50 via-white to-warmgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Unser Team
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-anthrazit leading-tight mb-6">
              Die Menschen hinter LebensWERT
            </h1>
            <p className="text-lg sm:text-xl text-darkgray leading-relaxed">
              Engagiert, vielfältig und mit Herz — unser Team aus
              Hauptamtlichen, Ehrenamtlichen und Vorstand macht LebensWERT aus.
            </p>
          </div>
        </div>
      </section>

      {/* Hauptamtliche */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4 text-center">
            Hauptamtliche Mitarbeiter
          </h2>
          <p className="text-darkgray text-lg text-center max-w-2xl mx-auto mb-12">
            Unser Team aus Sozialarbeitern, Pädagogen und Erziehern — immer auf Augenhöhe.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hauptamtliche.map((person) => (
              <div
                key={person.name}
                className="bg-warmgray rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {person.initials}
                </div>
                <div>
                  <h3 className="font-bold text-anthrazit">{person.name}</h3>
                  <p className="text-sm text-orange-600 font-medium mb-1">
                    {person.role}
                  </p>
                  <p className="text-sm text-darkgray">{person.bereich}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vorstand */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4 text-center">
            Vorstand
          </h2>
          <p className="text-darkgray text-lg text-center max-w-2xl mx-auto mb-12">
            Ehrenamtlich engagiert für den Verein.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {vorstand.map((person) => (
              <div key={person.name} className="bg-white rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-bold text-anthrazit">{person.name}</h3>
                <p className="text-sm text-darkgray">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ehrenamt CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Teil des Teams werden?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Wir suchen immer engagierte Menschen, die sich ehrenamtlich
            einbringen möchten — ob bei der Hausaufgabenhilfe, beim Kochen oder
            bei Veranstaltungen.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-colors"
          >
            Kontakt aufnehmen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
