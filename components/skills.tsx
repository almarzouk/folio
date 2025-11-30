"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Code2,
  Database,
  Palette,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Entwicklung",
    icon: Code2,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    skills: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React.js", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    title: "Backend Entwicklung",
    icon: Server,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PHP", level: 88 },
      { name: "REST APIs", level: 87 },
      { name: "Express.js", level: 82 },
      { name: "Laravel", level: 75 },
    ],
  },
  {
    title: "Datenbanken",
    icon: Database,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    title: "CMS & Tools",
    icon: Wrench,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    skills: [
      { name: "WordPress", level: 92 },
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 72 },
    ],
  },
  {
    title: "UI/UX & Design",
    icon: Palette,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 80 },
      { name: "Responsive Design", level: 92 },
      { name: "Accessibility", level: 85 },
    ],
  },
  {
    title: "Mobile & Responsive",
    icon: Smartphone,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    skills: [
      { name: "Mobile-First Design", level: 90 },
      { name: "Progressive Web Apps", level: 80 },
      { name: "Cross-Browser Testing", level: 88 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Technologien & Fähigkeiten
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mein technisches Skillset umfasst moderne Webtechnologien und
              bewährte Best Practices für die Entwicklung skalierbarer
              Anwendungen.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-12 p-8 bg-secondary/50 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Weitere Kompetenzen
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Agile/Scrum",
                "Clean Code",
                "SEO-Optimierung",
                "Performance-Optimierung",
                "API-Integration",
                "Versionskontrolle",
                "Testing & Debugging",
                "Responsive Design",
                "Barrierefreiheit",
                "Deployment & Hosting",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
