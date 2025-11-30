"use client";

import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-primary/5 -z-10" />

      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Greeting */}
              <div className="animate-fadeInUp">
                <p className="text-sm sm:text-base font-medium text-primary mb-2">
                  Hallo, ich bin
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                  Jumaa Almarzouk
                </h1>
              </div>

              {/* Title */}
              <div className="animate-fadeInUp delay-100">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/90">
                  Fullstack Webentwickler
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground mt-4">
                  mit Fokus auf{" "}
                  <span className="text-primary font-medium">React</span>,{" "}
                  <span className="text-primary font-medium">Next.js</span> und{" "}
                  <span className="text-primary font-medium">WordPress</span>
                </p>
              </div>

              {/* Description */}
              <div className="animate-fadeInUp delay-200">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Ich entwickle moderne, performante und benutzerfreundliche
                  Webanwendungen. Von der Konzeption bis zur Umsetzung – ich
                  bringe Ihre digitalen Projekte zum Leben.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fadeInUp delay-300">
                <Button asChild size="lg" className="group">
                  <Link href="#projects">
                    Projekte ansehen
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Kontakt aufnehmen
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/cv/Jumaa-Almarzouk-CV.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    Lebenslauf (PDF)
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 animate-fadeInUp delay-400">
                <Link
                  href="https://github.com/almarzouk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/almarzouk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:jumaa.almarzouk@gmail.com"
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">E-Mail</span>
                </Link>
              </div>

              {/* Location */}
              <div className="animate-fadeInUp delay-500">
                <p className="text-sm text-muted-foreground">
                  📍 Haselünne, Emsland • Deutschland
                </p>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="flex justify-center items-center order-1 lg:order-2 animate-fadeInUp delay-100">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
                <div className="absolute inset-4 rounded-full bg-primary/10 animate-pulse delay-300" />

                {/* Profile Image Container */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl bg-secondary">
                  <Image
                    src="/photo.png"
                    alt="Jumaa Almarzouk"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
