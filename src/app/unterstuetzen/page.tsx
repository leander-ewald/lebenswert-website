import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Copy,
  Check,
  Users,
  HandHeart,
  Briefcase,
  ArrowRight,
  CreditCard,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Unterstützen — Spenden, Mitglied werden, Ehrenamt",
  description:
    "Unterstützen Sie LebensWERT Iserlohn: Spenden ab 5€, Mitgliedschaft ab 1€/Monat oder ehrenamtliches Engagement. Gemeinnützig & steuerlich absetzbar.",
};

const betraege = [
  { amount: "5 €", impact: "Ein Bewerbungsfoto" },
  { amount: "10 €", impact: "Eine komplette Bewerbungsmappe" },
  { amount: "25 €", impact: "Ein Tag Coaching" },
  { amount: "50 €", impact: "Eine Woche Begleitung" },
];

const transparenz = [
  { label: "Projekte & direkte Hilfe", percent: 70, color: "bg-orange-600" },
  { label: "Personal & Räume", percent: 20, color: "bg-orange-400" },
  { label: "Verwaltung", percent: 10, color: "bg-orange-200" },
];

const ehrenamtBereiche = [
  "Nachhilfe & Hausaufgabenhilfe",
  "Begleitung bei Behördengängen",
  "Kochen & Veranstaltungen",
  "Handwerkliche Unterstützung",
  "Kreativ- & Sportangebote",
  "Öffentlichkeitsarbeit",
];

export default function Unterstuetzen() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-orange-50 via-white to-warmgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Unterstützen
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-anthrazit leading-tight mb-6">
              Gemeinsam mehr bewegen
            </h1>
            <p className="text-lg sm:text-xl text-darkgray leading-relaxed">
              Ihre Hilfe kommt direkt bei den Menschen in Iserlohn an — ob als
              Spende, Mitgliedschaft oder ehrenamtliches Engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Spenden */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4">
              Jetzt spenden
            </h2>
            <p className="text-darkgray text-lg max-w-2xl mx-auto">
              Schon ein kleiner Betrag macht einen großen Unterschied.
            </p>
          </div>

          {/* Beträge */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {betraege.map((b) => (
              <div
                key={b.amount}
                className="bg-orange-50 rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-extrabold text-orange-600 mb-2">
                  {b.amount}
                </p>
                <p className="text-sm text-darkgray">{b.impact}</p>
              </div>
            ))}
          </div>

          {/* Bankverbindung */}
          <div className="bg-warmgray rounded-2xl p-8 mb-8">
            <h3 className="font-bold text-anthrazit text-lg mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-orange-600" />
              Per Überweisung
            </h3>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-sm text-darkgray font-medium w-32">
                  Empfänger:
                </span>
                <span className="text-anthrazit font-medium">
                  LebensWERT Iserlohn e.V.
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-sm text-darkgray font-medium w-32">
                  IBAN:
                </span>
                <span className="text-anthrazit font-mono font-medium">
                  DE38 4455 0045 0000 1825 27
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-sm text-darkgray font-medium w-32">
                  Bank:
                </span>
                <span className="text-anthrazit font-medium">
                  Sparkasse Iserlohn
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-sm text-darkgray font-medium w-32">
                  Verwendungszweck:
                </span>
                <span className="text-anthrazit font-medium">Spende</span>
              </div>
            </div>
          </div>

          {/* Vertrauen */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-darkgray">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-orange-600" /> Gemeinnützig
              anerkannt
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-orange-600" />{" "}
              Spendenbescheinigung
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-orange-600" /> Steuerlich
              absetzbar
            </span>
          </div>
        </div>
      </section>

      {/* Transparenz */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4 text-center">
            Transparenz
          </h2>
          <p className="text-darkgray text-lg text-center max-w-2xl mx-auto mb-12">
            So verwenden wir Ihre Spende:
          </p>

          <div className="space-y-6">
            {transparenz.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-anthrazit">
                    {item.label}
                  </span>
                  <span className="font-bold text-anthrazit">
                    {item.percent}%
                  </span>
                </div>
                <div className="h-4 bg-white rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mitglied werden */}
      <section id="mitglied" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-10 h-10 text-orange-600" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit">
                Mitglied werden
              </h2>
            </div>

            <p className="text-lg text-darkgray mb-6 leading-relaxed max-w-2xl">
              Ab <strong className="text-orange-600">1 € im Monat</strong>{" "}
              werden Sie Teil der LebensWERT-Gemeinschaft. Als Mitglied
              unterstützen Sie unsere Arbeit dauerhaft und helfen uns, langfristig
              zu planen.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                "Einladung zur Mitgliederversammlung",
                "Regelmäßige Updates aus den Projekten",
                "Spendenbescheinigung am Jahresende",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-2 bg-white rounded-xl p-4"
                >
                  <Check className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-darkgray">{benefit}</p>
                </div>
              ))}
            </div>

            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 transition-colors"
            >
              Mitglied werden
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ehrenamt */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HandHeart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4">
              Ehrenamtlich engagieren
            </h2>
            <p className="text-darkgray text-lg max-w-2xl mx-auto">
              Bringen Sie sich ein — wir freuen uns über jede helfende Hand.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {ehrenamtBereiche.map((bereich) => (
              <div
                key={bereich}
                className="bg-white rounded-xl p-5 flex items-center gap-3 shadow-sm"
              >
                <Check className="w-5 h-5 text-orange-600 shrink-0" />
                <p className="text-darkgray font-medium">{bereich}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 transition-colors"
            >
              Kontakt aufnehmen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Für Unternehmen */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-anthrazit rounded-3xl p-8 sm:p-12 text-white">
            <Briefcase className="w-10 h-10 text-orange-500 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Für Unternehmen
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed max-w-2xl">
              Übernehmen Sie soziale Verantwortung in Iserlohn. Als
              Unternehmenspartner können Sie Projekte sponsern, Praktikumsplätze
              anbieten oder unsere Teilnehmer in Arbeit bringen.
            </p>
            <a
              href="mailto:Alex.Breuker@bewegt-iserlohn.de"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 transition-colors"
            >
              Partnerschaft anfragen
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
