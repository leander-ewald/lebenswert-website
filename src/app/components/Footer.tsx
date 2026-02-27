import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const projekte = [
  { href: "/zukunftswerkstatt", label: "Zukunftswerkstatt" },
  { href: "#", label: "Checkpoint" },
  { href: "#", label: "Lichtblick" },
  { href: "#", label: "Frohet Schaffen" },
  { href: "#", label: "Frohet Viertel" },
  { href: "#", label: "Culture Station" },
];

const more = [
  { href: "/zukunftswerkstatt#kontakt", label: "Hilfe finden" },
  { href: "/team", label: "Team" },
  { href: "/veranstaltungen", label: "Veranstaltungen" },
  { href: "/unterstuetzen", label: "Spenden" },
  { href: "/unterstuetzen#mitglied", label: "Mitglied werden" },
  { href: "/kontakt", label: "Ehrenamt" },
];

const legal = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function Footer() {
  return (
    <footer className="bg-anthrazit text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Kontakt */}
          <div>
            <p className="text-xl font-extrabold mb-4 font-[family-name:var(--font-heading)]">
              Lebens<span className="text-orange-600">WERT</span>
            </p>
            <p className="text-sm text-gray-400 mb-4">
              LebensWERT Iserlohn e.V.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <a
                href="https://maps.google.com/?q=Am+Bilstein+10-12+58638+Iserlohn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-orange-500 transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Am Bilstein 10-12, 58638 Iserlohn
              </a>
              <a
                href="tel:015152496870"
                className="flex items-center gap-2 hover:text-orange-500 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                0151 52496870
              </a>
              <a
                href="mailto:Alex.Breuker@bewegt-iserlohn.de"
                className="flex items-center gap-2 hover:text-orange-500 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                Kontakt per E-Mail
              </a>
            </div>
          </div>

          {/* Projekte */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Projekte
            </h3>
            <ul className="flex flex-col gap-2">
              {projekte.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-sm text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mehr */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Mehr
            </h3>
            <ul className="flex flex-col gap-2">
              {more.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Rechtliches
            </h3>
            <ul className="flex flex-col gap-2">
              {legal.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Förder-Logos Pflichthinweis */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-4">
            <Image
              src="/logos/esf-bmas_eu_foerderlogo.png"
              alt="BMAS & EU ESF Plus Förderlogo"
              width={160}
              height={64}
              className="h-10 w-auto brightness-0 invert opacity-70"
            />
            <Image
              src="/logos/winwin-winwin_logo_rgb_internet.png"
              alt="Win-Win"
              width={80}
              height={80}
              className="h-9 w-auto brightness-0 invert opacity-70"
            />
          </div>
          <p className="text-xs text-gray-500 text-center mb-4">
            Gefördert durch das Bundesministerium für Arbeit und Soziales und
            die Europäische Union (ESF Plus)
          </p>
          <p className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} LebensWERT Iserlohn e.V. — Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
