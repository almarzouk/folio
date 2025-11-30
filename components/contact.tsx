"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mrbnbbvo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `📧 Portfolio Kontakt: ${formData.subject}`,
          _autoresponse: `Vielen Dank für Ihre Nachricht, ${formData.name}!

Ich habe Ihre Nachricht erhalten und werde mich so schnell wie möglich bei Ihnen melden.

Ihre Nachricht:
"${formData.message}"

Mit freundlichen Grüßen,
Jumaa Almarzouk
Fullstack Webentwickler

---
📍 Haselünne, Deutschland
📧 jumaa.almarzouk@gmail.com
🔗 LinkedIn: linkedin.com/in/almarzouk
🔗 GitHub: github.com/almarzouk`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Es gab einen Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Kontakt aufnehmen
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sie haben ein Projekt im Kopf oder suchen einen Entwickler? Ich
              freue mich auf Ihre Nachricht und antworte in der Regel innerhalb
              von 24 Stunden.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    E-Mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link
                    href="mailto:jumaa.almarzouk@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jumaa.almarzouk@gmail.com
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    Standort
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Haselünne, Emsland
                    <br />
                    Deutschland
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Social Media</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link
                    href="https://github.com/almarzouk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/almarzouk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span>LinkedIn</span>
                  </Link>
                </CardContent>
              </Card>

              <div className="p-6 bg-primary/10 rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Verfügbarkeit</h3>
                <p className="text-sm text-muted-foreground">
                  Aktuell offen für neue Projekte und Festanstellungen.
                  Bevorzugt Remote oder im Raum Niedersachsen.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Nachricht senden</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="py-12 text-center">
                      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Nachricht gesendet!
                      </h3>
                      <p className="text-muted-foreground">
                        Vielen Dank für Ihre Nachricht. Ich melde mich so
                        schnell wie möglich bei Ihnen.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium text-foreground"
                          >
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Ihr Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-foreground"
                          >
                            E-Mail *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="ihre@email.de"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="text-sm font-medium text-foreground"
                        >
                          Betreff *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Worum geht es?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-foreground"
                        >
                          Nachricht *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Erzählen Sie mir von Ihrem Projekt..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full group"
                        disabled={isSubmitting}
                      >
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        * Pflichtfelder. Ihre Daten werden vertraulich behandelt
                        und nicht an Dritte weitergegeben.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
