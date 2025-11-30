import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Fragment } from "react";
import { Mail, MapPin, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum | Jumaa Almarzouk",
  description: "Impressum und rechtliche Angaben gemäß § 5 TMG",
  robots: "noindex, nofollow",
};

export default function ImpressumPage() {
  return (
    <Fragment>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Impressum</h1>
              <p className="text-muted-foreground text-lg">
                Angaben gemäß § 5 TMG (Telemediengesetz)
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Verantwortlich */}
              <section className="bg-secondary/30 rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  Verantwortlich für den Inhalt
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground text-lg">
                      Jumaa Almarzouk
                    </p>
                    <p className="text-sm mt-1">Fullstack Webentwickler</p>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Adresse</p>
                      <p>Haselünne</p>
                      <p>Emsland, Deutschland</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Kontakt</p>
                      <a
                        href="mailto:jumaa.almarzouk@gmail.com"
                        className="text-primary hover:underline"
                      >
                        jumaa.almarzouk@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Haftungsausschluss */}
              <section>
                <h2 className="text-2xl font-semibold mb-6">
                  Haftungsausschluss
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-foreground">
                      Haftung für Inhalte
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Die Inhalte dieser Seiten wurden mit größter Sorgfalt
                      erstellt. Für die Richtigkeit, Vollständigkeit und
                      Aktualität der Inhalte kann ich jedoch keine Gewähr
                      übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs.1
                      TMG für eigene Inhalte auf diesen Seiten nach den
                      allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
                      bin ich als Diensteanbieter jedoch nicht verpflichtet,
                      übermittelte oder gespeicherte fremde Informationen zu
                      überwachen oder nach Umständen zu forschen, die auf eine
                      rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3 text-foreground">
                      Haftung für Links
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mein Angebot enthält Links zu externen Websites Dritter,
                      auf deren Inhalte ich keinen Einfluss habe. Deshalb kann
                      ich für diese fremden Inhalte auch keine Gewähr
                      übernehmen. Für die Inhalte der verlinkten Seiten ist
                      stets der jeweilige Anbieter oder Betreiber der Seiten
                      verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
                      der Verlinkung auf mögliche Rechtsverstöße überprüft.
                      Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
                      nicht erkennbar.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3 text-foreground">
                      Urheberrecht
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke
                      auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                      Die Vervielfältigung, Bearbeitung, Verbreitung und jede
                      Art der Verwertung außerhalb der Grenzen des
                      Urheberrechtes bedürfen der schriftlichen Zustimmung des
                      jeweiligen Autors bzw. Erstellers. Downloads und Kopien
                      dieser Seite sind nur für den privaten, nicht
                      kommerziellen Gebrauch gestattet.
                    </p>
                  </div>
                </div>
              </section>

              {/* EU-Streitschlichtung */}
              <section className="bg-secondary/30 rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4">
                  EU-Streitschlichtung
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  . Ich bin nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              {/* Update Info */}
              <div className="text-sm text-muted-foreground pt-6 border-t border-border">
                <p>Stand: November 2025</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
