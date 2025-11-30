"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const navigation = [
  { name: "Start", href: "#hero" },
  { name: "Über mich", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projekte", href: "#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">JA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/10 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button asChild size="sm">
              <Link href="#contact">Kontakt aufnehmen</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 md:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <div className="relative h-full overflow-y-auto">
              <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col space-y-1">
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-6 py-4 rounded-lg text-lg font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: "slideInRight 0.3s ease-out forwards",
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="px-6 pt-6">
                    <Button
                      asChild
                      className="w-full"
                      size="lg"
                      style={{
                        animationDelay: `${navigation.length * 50}ms`,
                        animation: "slideInRight 0.3s ease-out forwards",
                      }}
                    >
                      <Link
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Kontakt aufnehmen
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
