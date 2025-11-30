import { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Fragment } from "react";
import {
  Shield,
  Mail,
  Cookie,
  BarChart3,
  FileText,
  UserCircle,
  Lock,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Jumaa Almarzouk",
  description:
    "Datenschutzerklärung gemäß DSGVO - Informationen zum Datenschutz",
  robots: "noindex, nofollow",
};

export default function DatenschutzPage() {
  return (
    <Fragment>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-10 w-10 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Datenschutzerklärung
                </h1>
              </div>
              <p className="text-muted-foreground text-lg">
                Informationen gemäß Art. 13, 14 DSGVO
                (Datenschutz-Grundverordnung)
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Einleitung */}
              <section className="bg-secondary/30 rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Lock className="h-6 w-6 text-primary" />
                  Datenschutz auf einen Blick
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Der Schutz Ihrer persönlichen Daten ist mir sehr wichtig. Ich
                  behandle Ihre personenbezogenen Daten vertraulich und
                  entsprechend der gesetzlichen Datenschutzvorschriften sowie
                  dieser Datenschutzerklärung. Wenn Sie diese Website nutzen,
                  werden verschiedene personenbezogene Daten erhoben. Diese
                  Datenschutzerklärung erläutert, welche Daten ich erhebe und
                  wofür ich sie nutze.
                </p>
              </section>

              {/* Verantwortlicher */}
              <section>
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <UserCircle className="h-6 w-6 text-primary" />
                  Verantwortlicher
                </h2>
                <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                  <p className="font-medium text-foreground mb-2">
                    Jumaa Almarzouk
                  </p>
                  <p className="text-muted-foreground">
                    Haselünne, Deutschland
                  </p>
                  <p className="text-muted-foreground mt-3">
                    E-Mail:{" "}
                    <a
                      href="mailto:jumaa.almarzouk@gmail.com"
                      className="text-primary hover:underline"
                    >
                      jumaa.almarzouk@gmail.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Datenerfassung */}
              <section>
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Datenerfassung auf dieser Website
                </h2>

                <div className="space-y-8">
                  {/* Server-Log-Dateien */}
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-foreground flex items-center gap-2">
                      <Globe className="h-5 w-5 text-primary" />
                      Server-Log-Dateien
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Der Provider der Seiten (Vercel) erhebt und speichert
                      automatisch Informationen in Server-Log-Dateien, die Ihr
                      Browser automatisch übermittelt:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Browsertyp und Browserversion</li>
                      <li>Verwendetes Betriebssystem</li>
                      <li>Referrer URL</li>
                      <li>Hostname des zugreifenden Rechners</li>
                      <li>Uhrzeit der Serveranfrage</li>
                      <li>IP-Adresse</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Diese Daten werden nicht mit anderen Datenquellen
                      zusammengeführt. Die Erfassung dieser Daten erfolgt auf
                      Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                      Websitebetreiber hat ein berechtigtes Interesse an der
                      technisch fehlerfreien Darstellung und der Optimierung
                      seiner Website.
                    </p>
                  </div>

                  {/* Kontaktformular */}
                  <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                    <h3 className="text-xl font-medium mb-3 text-foreground flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      Kontaktformular
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Wenn Sie mir per Kontaktformular Anfragen zukommen lassen,
                      werden Ihre Angaben aus dem Anfrageformular inklusive der
                      von Ihnen dort angegebenen Kontaktdaten zur Bearbeitung
                      der Anfrage und für den Fall von Anschlussfragen bei mir
                      gespeichert.
                    </p>
                    <div className="bg-background/50 rounded p-4 space-y-2">
                      <p className="text-sm font-medium text-foreground">
                        Erhobene Daten:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-4">
                        <li>Name</li>
                        <li>E-Mail-Adresse</li>
                        <li>Nachrichteninhalt</li>
                        <li>Zeitpunkt der Absendung</li>
                      </ul>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      Das Kontaktformular wird über{" "}
                      <span className="font-medium text-foreground">
                        Formspree
                      </span>{" "}
                      bereitgestellt. Die Daten werden verschlüsselt übertragen
                      und auf Servern in den USA gespeichert. Weitere
                      Informationen finden Sie in der{" "}
                      <a
                        href="https://formspree.io/legal/privacy-policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Datenschutzerklärung von Formspree
                      </a>
                      .
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                      Interesse an der Bearbeitung Ihrer Anfrage).
                    </p>
                  </div>
                </div>
              </section>

              {/* Google Analytics */}
              <section>
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  Google Analytics
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Diese Website nutzt Funktionen des Webanalysedienstes Google
                    Analytics. Anbieter ist die Google Ireland Limited
                    (&quot;Google&quot;), Gordon House, Barrow Street, Dublin 4,
                    Irland.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Google Analytics verwendet Cookies und andere Technologien,
                    die eine Analyse der Benutzung der Website durch Sie
                    ermöglichen. Die durch die Cookies erzeugten Informationen
                    über Ihre Benutzung dieser Website werden in der Regel an
                    einen Server von Google in den USA übertragen und dort
                    gespeichert.
                  </p>
                  <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                    <p className="font-medium text-foreground mb-2">
                      Erhobene Daten:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Seitenaufrufe und Verweildauer</li>
                      <li>Verwendete Geräte und Browser</li>
                      <li>Geografische Herkunft (anonymisiert)</li>
                      <li>Interaktionen mit der Website</li>
                    </ul>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Ich habe ein
                    berechtigtes Interesse an der Analyse des Nutzerverhaltens,
                    um mein Webangebot zu optimieren.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Weitere Informationen finden Sie in der{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Datenschutzerklärung von Google
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section className="bg-secondary/30 rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Cookie className="h-6 w-6 text-primary" />
                  Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Diese Website verwendet Cookies. Das sind kleine Textdateien,
                  die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies
                  helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver
                  und sicherer zu machen.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Einige Cookies sind &quot;Session-Cookies&quot;. Solche
                  Cookies werden nach Ende Ihrer Browser-Sitzung von selbst
                  gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät
                  bestehen, bis Sie diese selbst löschen. Solche Cookies helfen
                  uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Mit einem modernen Webbrowser können Sie das Setzen von
                  Cookies überwachen, einschränken oder unterbinden. Viele
                  Webbrowser lassen sich so konfigurieren, dass Cookies mit dem
                  Schließen des Programms von selbst gelöscht werden. Die
                  Deaktivierung von Cookies kann eine eingeschränkte
                  Funktionalität unserer Website zur Folge haben.
                </p>
              </section>

              {/* Ihre Rechte */}
              <section>
                <h2 className="text-2xl font-semibold mb-6">
                  Ihre Rechte als Betroffener
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Sie haben nach der DSGVO verschiedene Rechte bezüglich Ihrer
                    personenbezogenen Daten:
                  </p>
                  <div className="grid gap-4">
                    <div className="bg-secondary/30 rounded-lg p-4 border border-border">
                      <p className="font-medium text-foreground mb-2">
                        ✓ Recht auf Auskunft (Art. 15 DSGVO)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sie haben das Recht, Auskunft über Ihre von mir
                        verarbeiteten personenbezogenen Daten zu verlangen.
                      </p>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-4 border border-border">
                      <p className="font-medium text-foreground mb-2">
                        ✓ Recht auf Berichtigung (Art. 16 DSGVO)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sie haben das Recht, unverzüglich die Berichtigung
                        unrichtiger oder Vervollständigung Ihrer bei mir
                        gespeicherten Daten zu verlangen.
                      </p>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-4 border border-border">
                      <p className="font-medium text-foreground mb-2">
                        ✓ Recht auf Löschung (Art. 17 DSGVO)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sie haben das Recht, die Löschung Ihrer bei mir
                        gespeicherten Daten zu verlangen.
                      </p>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-4 border border-border">
                      <p className="font-medium text-foreground mb-2">
                        ✓ Recht auf Einschränkung (Art. 18 DSGVO)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sie haben das Recht, die Einschränkung der Verarbeitung
                        Ihrer Daten zu verlangen.
                      </p>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-4 border border-border">
                      <p className="font-medium text-foreground mb-2">
                        ✓ Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sie haben das Recht, Ihre Daten in einem strukturierten,
                        gängigen Format zu erhalten.
                      </p>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-4 border border-border">
                      <p className="font-medium text-foreground mb-2">
                        ✓ Recht auf Widerspruch (Art. 21 DSGVO)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sie haben das Recht, der Verarbeitung Ihrer Daten zu
                        widersprechen.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SSL-Verschlüsselung */}
              <section className="bg-secondary/30 rounded-lg p-8 border border-border">
                <h2 className="text-2xl font-semibold mb-4">
                  SSL- bzw. TLS-Verschlüsselung
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                  Übertragung vertraulicher Inhalte eine SSL- bzw.
                  TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
                  Sie daran, dass die Adresszeile des Browsers von
                  &quot;http://&quot; auf &quot;https://&quot; wechselt und an
                  dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Fragen zum Datenschutz?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer
                  personenbezogenen Daten, bei Auskünften, Berichtigung,
                  Sperrung oder Löschung von Daten wenden Sie sich bitte an:
                </p>
                <div className="mt-4 bg-secondary/30 rounded-lg p-6 border border-border">
                  <p className="font-medium text-foreground">Jumaa Almarzouk</p>
                  <a
                    href="mailto:jumaa.almarzouk@gmail.com"
                    className="text-primary hover:underline"
                  >
                    jumaa.almarzouk@gmail.com
                  </a>
                </div>
              </section>

              {/* Update Info */}
              <div className="text-sm text-muted-foreground pt-6 border-t border-border">
                <p>Stand: November 2025</p>
                <p className="mt-2">
                  Diese Datenschutzerklärung wurde zuletzt aktualisiert und
                  entspricht dem aktuellen Stand der DSGVO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
