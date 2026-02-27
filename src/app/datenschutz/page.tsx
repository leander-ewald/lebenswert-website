import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von LebensWERT Iserlohn e.V.",
};

export default function Datenschutz() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-lg max-w-none text-darkgray space-y-8">
          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">
              1. Datenschutz auf einen Blick
            </h2>

            <h3 className="text-lg font-bold text-anthrazit mt-4 mb-1">
              Allgemeine Hinweise
            </h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-lg font-bold text-anthrazit mt-4 mb-1">
              Datenerfassung auf dieser Website
            </h3>
            <p>
              <strong>
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber: LebensWERT Iserlohn e.V., Obere Mühle 28, 58636
              Iserlohn.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">
              2. Verantwortliche Stelle
            </h2>
            <p>
              LebensWERT Iserlohn e.V.
              <br />
              Obere Mühle 28
              <br />
              58636 Iserlohn
              <br />
              <br />
              Telefon:{" "}
              <a
                href="tel:015152496870"
                className="text-orange-600 hover:underline"
              >
                0151 52496870
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:Alex.Breuker@bewegt-iserlohn.de"
                className="text-orange-600 hover:underline"
              >
                Alex.Breuker@bewegt-iserlohn.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">
              3. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Vercel kann
              Zugriffsdaten in sogenannten Server-Logfiles erheben, die Ihr
              Browser automatisch übermittelt. Diese umfassen: Browsertyp und
              -version, verwendetes Betriebssystem, Referrer URL, Hostname des
              zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
            <p>
              Vercel verarbeitet Daten in unserem Auftrag und ist vertraglich
              verpflichtet, angemessene technische und organisatorische
              Maßnahmen zum Datenschutz zu treffen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">
              4. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="text-lg font-bold text-anthrazit mt-4 mb-1">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist der oben genannte Verein. Verantwortliche Stelle ist
              die natürliche oder juristische Person, die allein oder gemeinsam
              mit anderen über die Zwecke und Mittel der Verarbeitung von
              personenbezogenen Daten entscheidet.
            </p>

            <h3 className="text-lg font-bold text-anthrazit mt-4 mb-1">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>

            <h3 className="text-lg font-bold text-anthrazit mt-4 mb-1">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p>
              Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein
              Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist
              der Landesdatenschutzbeauftragte des Bundeslandes
              Nordrhein-Westfalen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">
              5. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-lg font-bold text-anthrazit mt-4 mb-1">
              Cookies
            </h3>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige
              Cookies. Es werden keine Tracking-Cookies oder Cookies für
              Werbezwecke eingesetzt. Technisch notwendige Cookies dienen dazu,
              die Nutzung der Website zu ermöglichen und bestimmte Funktionen
              bereitzustellen.
            </p>

            <h3 className="text-lg font-bold text-anthrazit mt-4 mb-1">
              Server-Log-Dateien
            </h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch übermittelt. Dies sind: Browsertyp und -version,
              verwendetes Betriebssystem, Referrer URL, Hostname des
              zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">
              6. Ihre Rechte
            </h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten
              </li>
              <li>Berichtigung unrichtiger personenbezogener Daten</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten</li>
              <li>
                Einschränkung der Datenverarbeitung, sofern wir Ihre Daten
                aufgrund gesetzlicher Pflichten noch nicht löschen dürfen
              </li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten</li>
              <li>
                Datenübertragbarkeit, sofern Sie in die Datenverarbeitung
                eingewilligt haben oder einen Vertrag mit uns geschlossen haben
              </li>
            </ul>
            <p className="mt-4">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
              sich jederzeit an uns wenden:{" "}
              <a
                href="mailto:Alex.Breuker@bewegt-iserlohn.de"
                className="text-orange-600 hover:underline"
              >
                Alex.Breuker@bewegt-iserlohn.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">
              7. Analyse-Tools und Werbung
            </h2>
            <p>
              Diese Website verwendet keine Analyse-Tools von Drittanbietern und
              keine Werbe-Tracker. Es werden keine Daten an Google Analytics,
              Facebook Pixel oder vergleichbare Dienste übermittelt.
            </p>
          </div>

          <div className="bg-warmgray rounded-2xl p-6 mt-8">
            <p className="text-sm text-midgray">
              Stand: Februar 2026. Diese Datenschutzerklärung wird bei Bedarf
              aktualisiert. Wir empfehlen, sie regelmäßig zu überprüfen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
