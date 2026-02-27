import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von LebensWERT Iserlohn e.V.",
};

export default function Impressum() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-anthrazit mb-8">
          Impressum
        </h1>

        <div className="prose prose-lg max-w-none text-darkgray space-y-8">
          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              LebensWERT Iserlohn e.V.
              <br />
              Obere Mühle 28
              <br />
              58636 Iserlohn
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">
              Vertreten durch
            </h2>
            <p>Sönke Kühl (Vorstand)</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">Kontakt</h2>
            <p>
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
              Registereintrag
            </h2>
            <p>
              Eingetragen im Vereinsregister.
              <br />
              Registergericht: Amtsgericht Iserlohn
              <br />
              Registernummer: Auf Anfrage
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">
              Gemeinnützigkeit
            </h2>
            <p>
              LebensWERT Iserlohn e.V. ist vom Finanzamt Iserlohn als
              gemeinnützig anerkannt. Spenden sind steuerlich absetzbar.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Alex Breuker
              <br />
              Obere Mühle 28
              <br />
              58636 Iserlohn
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">
              Haftungsausschluss
            </h2>

            <h3 className="text-lg font-bold text-anthrazit mt-4 mb-1">
              Haftung für Inhalte
            </h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
              sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>

            <h3 className="text-lg font-bold text-anthrazit mt-4 mb-1">
              Haftung für Links
            </h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              verantwortlich. Eine permanente inhaltliche Kontrolle der
              verlinkten Seiten ist ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar.
            </p>

            <h3 className="text-lg font-bold text-anthrazit mt-4 mb-1">
              Urheberrecht
            </h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des Vereins.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-anthrazit mb-2">
              Förderhinweis
            </h2>
            <p>
              Die Zukunftswerkstatt wird gefördert durch das Bundesministerium
              für Arbeit und Soziales und die Europäische Union über den
              Europäischen Sozialfonds Plus (ESF Plus).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
