import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt — So erreichen Sie uns",
  description:
    "Kontaktieren Sie LebensWERT Iserlohn e.V. Telefon, E-Mail, Adresse und Öffnungszeiten. Wir freuen uns auf Ihre Nachricht.",
};

const kontaktWege = [
  {
    icon: Phone,
    label: "Telefon",
    value: "0151 52496870",
    href: "tel:015152496870",
    desc: "Mo–Fr, 9–17 Uhr",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "Alex.Breuker@bewegt-iserlohn.de",
    href: "mailto:Alex.Breuker@bewegt-iserlohn.de",
    desc: "Antwort innerhalb von 48 Stunden",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Am Bilstein 10-12, 58638 Iserlohn",
    href: "https://maps.google.com/?q=Am+Bilstein+10-12+58638+Iserlohn",
    desc: "Büro des Vereins",
  },
];

const standorte = [
  {
    name: "Vereinsbüro",
    address: "Am Bilstein 10-12, 58638 Iserlohn",
    desc: "Hauptsitz von LebensWERT Iserlohn e.V.",
    href: "https://maps.google.com/?q=Am+Bilstein+10-12+58638+Iserlohn",
  },
  {
    name: "Zukunftswerkstatt",
    address: "Biestein 8-10, 58640 Iserlohn",
    desc: "Coaching & Bewerbungshilfe für junge Männer",
    href: "https://maps.google.com/?q=Biestein+8-10+58640+Iserlohn",
  },
];

export default function Kontakt() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-orange-50 via-white to-warmgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Kontakt
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-anthrazit leading-tight mb-6">
              Wir freuen uns auf Sie
            </h1>
            <p className="text-lg sm:text-xl text-darkgray leading-relaxed">
              Ob Frage, Idee oder Interesse an einer Zusammenarbeit — melden Sie
              sich gerne bei uns.
            </p>
          </div>
        </div>
      </section>

      {/* Brauchst du Hilfe? — Betroffene zuerst */}
      <section className="py-12 bg-anthrazit text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Du brauchst Hilfe? Meld dich — wir sind für dich da.
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Du steckst fest und weißt nicht weiter? Du musst das
              nicht alleine schaffen. Ruf an oder schreib uns — kostenlos und
              vertraulich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:015152496870"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 transition-colors"
              >
                <Phone className="w-5 h-5" />
                0151 52496870
              </a>
              <a
                href="https://wa.me/4915152496870"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktwege */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {kontaktWege.map((k) => (
              <a
                key={k.label}
                href={k.href}
                target={k.label === "Adresse" ? "_blank" : undefined}
                rel={
                  k.label === "Adresse" ? "noopener noreferrer" : undefined
                }
                className="bg-orange-50 rounded-2xl p-6 text-center hover:bg-orange-100 transition-colors group"
              >
                <k.icon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-anthrazit mb-1">{k.label}</h3>
                <p className="text-orange-600 font-medium text-sm mb-1 group-hover:underline">
                  {k.value}
                </p>
                <p className="text-xs text-darkgray">{k.desc}</p>
              </a>
            ))}
          </div>

          {/* Ansprechpartner */}
          <div className="bg-warmgray rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-extrabold text-anthrazit mb-4">
              Ihr Ansprechpartner
            </h2>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-xl sm:text-2xl font-bold text-orange-600">AB</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-anthrazit">
                  Alex Breuker
                </h3>
                <p className="text-darkgray mb-3">Sozialmanager M.A.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:015152496870"
                    className="inline-flex items-center gap-2 text-sm text-orange-600 font-medium hover:underline"
                  >
                    <Phone className="w-4 h-4" /> 0151 52496870
                  </a>
                  <a
                    href="mailto:Alex.Breuker@bewegt-iserlohn.de"
                    className="inline-flex items-center gap-2 text-sm text-orange-600 font-medium hover:underline"
                  >
                    <Mail className="w-4 h-4" /> E-Mail schreiben
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Standorte */}
          <h2 className="text-2xl font-extrabold text-anthrazit mb-6">
            Unsere Standorte
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {standorte.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-warmgray rounded-2xl p-6 hover:bg-orange-50 transition-colors group"
              >
                <MapPin className="w-6 h-6 text-orange-600 mb-3" />
                <h3 className="font-bold text-anthrazit mb-1 group-hover:text-orange-600 transition-colors">
                  {s.name}
                </h3>
                <p className="text-darkgray text-sm mb-1">{s.address}</p>
                <p className="text-xs text-midgray">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Öffnungszeiten */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="w-10 h-10 text-orange-600 mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-anthrazit mb-6">
            Öffnungszeiten
          </h2>
          <div className="bg-white rounded-2xl p-8 inline-block mx-auto">
            <div className="space-y-3 text-left">
              {[
                { day: "Montag – Freitag", time: "9:00 – 17:00 Uhr" },
                {
                  day: "Samstag & Sonntag",
                  time: "nach Vereinbarung",
                },
              ].map((z) => (
                <div
                  key={z.day}
                  className="flex justify-between gap-8 text-anthrazit"
                >
                  <span className="font-medium">{z.day}</span>
                  <span className="text-darkgray">{z.time}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-midgray mt-4">
            Termine außerhalb der Öffnungszeiten nach Absprache möglich.
          </p>
        </div>
      </section>
    </>
  );
}
