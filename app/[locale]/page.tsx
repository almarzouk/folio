import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { PersonSchema, WebsiteSchema } from "@/components/json-ld";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PersonSchema />
      <WebsiteSchema />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
