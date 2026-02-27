import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Veranstaltungen & Wochenprogramm",
  description:
    "Wochenprogramm von LebensWERT Iserlohn: Kids-Café, Kreativcafé, Breakdance, Zirkus, Family Dinner, Hausaufgabenhilfe und mehr.",
};

const checkpointProgramm = [
  {
    day: "Montag",
    events: [
      { time: "15:00 – 16:30", name: "Kids-Café", desc: "Alter 6–12" },
      { time: "17:00 – 19:00", name: "Kreativcafé", desc: "Ab 13 Jahren" },
    ],
  },
  {
    day: "Dienstag",
    events: [
      { time: "15:00 – 16:30", name: "Kids-Café", desc: "Alter 6–12" },
      {
        time: "17:00 – 19:00",
        name: "Girls only",
        desc: "14-tägig, Aktivitäten & Austausch",
      },
      {
        time: "18:00 – 20:00",
        name: "Hacking Space",
        desc: "Technik & Basteln",
      },
    ],
  },
  {
    day: "Mittwoch",
    events: [
      { time: "15:00 – 16:30", name: "Kids-Café", desc: "Alter 6–12" },
      { time: "15:30 – 17:00", name: "Breakdance", desc: "" },
      { time: "16:00 – 18:30", name: "Zirkus-Kurs", desc: "" },
      {
        time: "17:00 – 19:00",
        name: "Perspektivwechsel",
        desc: "Integratives Projekt",
      },
      { time: "18:30 – 20:00", name: "Kreativcafé", desc: "Ab 13 Jahren" },
    ],
  },
  {
    day: "Donnerstag",
    events: [
      { time: "15:00 – 16:30", name: "Kids-Café", desc: "Alter 6–12" },
      {
        time: "18:00 – 20:00",
        name: "Checkpoint Talk",
        desc: "Gesprächsrunde",
      },
    ],
  },
  {
    day: "Freitag",
    events: [
      { time: "15:00 – 16:30", name: "Kids-Café", desc: "Alter 6–12" },
      {
        time: "17:00 – 19:00",
        name: "Gaming & Kreativcafé",
        desc: "Ab 13 Jahren",
      },
    ],
  },
];

const lichtblickProgramm = [
  {
    day: "Montag – Donnerstag",
    events: [
      {
        time: "ab 12:30",
        name: "Lichtblick Kids",
        desc: "Mittagessen & Hausaufgabenbetreuung",
      },
    ],
  },
  {
    day: "Dienstag",
    events: [
      {
        time: "17:00 – 19:00",
        name: "Family Dinner",
        desc: "Gemeinsames Abendessen für Familien",
      },
    ],
  },
  {
    day: "Donnerstag",
    events: [
      { time: "14:30", name: "Go Café", desc: "Soziales Zusammenkommen" },
      {
        time: "18:00",
        name: "Lebensmittelausgabe",
        desc: "Lebensmittel-Verteilung",
      },
    ],
  },
];

const sonderEvents = [
  {
    name: "Lebenslauf",
    desc: "Jährlicher Spendenlauf für den Verein — gemeinsam Kilometer sammeln und Gutes tun.",
    when: "Jährlich im Sommer",
  },
  {
    name: "Culture Station",
    desc: "Kulturveranstaltungen und Open-Air-Events in der südlichen Innenstadt.",
    when: "Saisonal",
  },
  {
    name: "Daytrip & Camp",
    desc: "Ausflüge und Freizeiten für Jugendliche — raus aus dem Alltag, rein ins Abenteuer.",
    when: "In den Ferien",
  },
  {
    name: "Quartiertag X",
    desc: "Barcamp-Format zu Themen wie Jugend, Digitalität und Demokratie stärken.",
    when: "Unregelmäßig",
  },
  {
    name: "Tag der Nachbarn",
    desc: "Nachbarschaftsfest mit Kleinfeld-Fußballmeisterschaft und gemeinsamem Feiern.",
    when: "Jährlich im Mai",
  },
];

export default function Veranstaltungen() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-orange-50 via-white to-warmgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-4">
              Veranstaltungen & Programm
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-anthrazit leading-tight mb-6">
              Diese Woche bei uns
            </h1>
            <p className="text-lg sm:text-xl text-darkgray leading-relaxed">
              Von Kids-Café bis Breakdance, von Hausaufgabenhilfe bis Family
              Dinner — bei uns ist immer etwas los.
            </p>
          </div>
        </div>
      </section>

      {/* Checkpoint Wochenprogramm */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-proj-checkpoint rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-anthrazit">
                Checkpoint — Jugendcafé
              </h2>
              <p className="text-sm text-darkgray flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Kurt-Schumacher-Ring 12-14,
                58636 Iserlohn
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {checkpointProgramm.map((day) => (
              <div
                key={day.day}
                className="bg-warmgray rounded-2xl overflow-hidden"
              >
                <div className="bg-proj-checkpoint px-6 py-3">
                  <h3 className="font-bold text-white">{day.day}</h3>
                </div>
                <div className="p-4 space-y-3">
                  {day.events.map((event) => (
                    <div
                      key={`${day.day}-${event.name}`}
                      className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 bg-white rounded-xl p-3 sm:p-4"
                    >
                      <div className="flex items-center gap-1 text-sm text-darkgray shrink-0 sm:w-32">
                        <Clock className="w-4 h-4 text-proj-checkpoint" />
                        {event.time}
                      </div>
                      <div>
                        <p className="font-bold text-anthrazit">{event.name}</p>
                        {event.desc && (
                          <p className="text-sm text-darkgray">{event.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lichtblick Wochenprogramm */}
      <section className="py-20 bg-warmgray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-proj-lichtblick rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-anthrazit">
                Lichtblick — Sozialzentrum
              </h2>
              <p className="text-sm text-darkgray flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Am Bilstein 10-12, 58638
                Iserlohn
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {lichtblickProgramm.map((day) => (
              <div
                key={day.day}
                className="bg-white rounded-2xl overflow-hidden"
              >
                <div className="bg-proj-lichtblick px-6 py-3">
                  <h3 className="font-bold text-white">{day.day}</h3>
                </div>
                <div className="p-4 space-y-3">
                  {day.events.map((event) => (
                    <div
                      key={`${day.day}-${event.name}`}
                      className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 bg-warmgray rounded-xl p-3 sm:p-4"
                    >
                      <div className="flex items-center gap-1 text-sm text-darkgray shrink-0 sm:w-32">
                        <Clock className="w-4 h-4 text-proj-lichtblick" />
                        {event.time}
                      </div>
                      <div>
                        <p className="font-bold text-anthrazit">{event.name}</p>
                        {event.desc && (
                          <p className="text-sm text-darkgray">{event.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sonderveranstaltungen */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-4 text-center">
            Besondere Veranstaltungen
          </h2>
          <p className="text-darkgray text-lg text-center max-w-2xl mx-auto mb-12">
            Neben dem Wochenprogramm gibt es regelmäßig besondere Events.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sonderEvents.map((event) => (
              <div
                key={event.name}
                className="bg-orange-50 rounded-2xl p-6"
              >
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  {event.when}
                </span>
                <h3 className="text-lg font-bold text-anthrazit mt-2 mb-2">
                  {event.name}
                </h3>
                <p className="text-sm text-darkgray leading-relaxed">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-anthrazit text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Komm vorbei!
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Alle Angebote sind kostenlos. Einfach vorbeikommen — du brauchst
            dich nicht anzumelden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-500 transition-colors"
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
