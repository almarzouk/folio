import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const navigation = {
  main: [
    { name: "Start", href: "#hero" },
    { name: "Über mich", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projekte", href: "#projects" },
    { name: "Blog", href: "/blog" },
    { name: "Kontakt", href: "#contact" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/almarzouk",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/almarzouk",
      icon: Linkedin,
    },
    {
      name: "E-Mail",
      href: "mailto:jumaa.almarzouk@gmail.com",
      icon: Mail,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-primary">
                  Jumaa Almarzouk
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fullstack Webentwickler mit Leidenschaft für moderne
                Webtechnologien und Clean Code. Spezialisiert auf React, Next.js
                und WordPress.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>📍</span>
                <span>Haselünne, Deutschland</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Kontakt & Social
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <Link
                    href="mailto:jumaa.almarzouk@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    jumaa.almarzouk@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  {navigation.social.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="sr-only">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <p className="text-sm text-muted-foreground text-center sm:text-left">
                © {new Date().getFullYear()} Jumaa Almarzouk. Alle Rechte
                vorbehalten.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <Link
                  href="/impressum"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Impressum
                </Link>
                <span className="text-muted-foreground/50">•</span>
                <Link
                  href="/datenschutz"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Datenschutz
                </Link>
              </div>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Entwickelt mit{" "}
              <Heart className="h-4 w-4 text-red-500 fill-current" /> und{" "}
              <span className="text-primary font-medium">Next.js</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
