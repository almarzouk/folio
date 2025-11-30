import React from "react";
import Script from "next/script";

interface JsonLdProps {
  data: object;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Person Schema for Homepage
export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jumaa Almarzouk",
    jobTitle: "Fullstack Web Developer",
    description:
      "Fullstack Webentwickler spezialisiert auf React, Next.js, WordPress und moderne Webtechnologien",
    url: "jumaa-portfolio.vercel.app",
    image: "jumaa-portfolio.vercel.app/photo.png",
    email: "jumaa.almarzouk@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Haselünne",
      addressRegion: "Emsland",
      addressCountry: "DE",
    },
    sameAs: [
      "https://github.com/almarzouk",
      "https://linkedin.com/in/almarzouk",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "WordPress",
      "PHP",
      "Laravel",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Tailwind CSS",
      "Web Development",
    ],
  };

  return <JsonLd data={schema} />;
}

// Blog Posting Schema
export function BlogPostingSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  url,
  image,
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: author,
      url: "jumaa-portfolio.vercel.app",
    },
    publisher: {
      "@type": "Person",
      name: "Jumaa Almarzouk",
      logo: {
        "@type": "ImageObject",
        url: "jumaa-portfolio.vercel.app/JA.png",
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    url: url,
    image: image || "jumaa-portfolio.vercel.app/og-image",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return <JsonLd data={schema} />;
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jumaa Almarzouk Portfolio",
    description:
      "Portfolio und Blog von Jumaa Almarzouk - Fullstack Webentwickler",
    url: "jumaa-portfolio.vercel.app",
    author: {
      "@type": "Person",
      name: "Jumaa Almarzouk",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "jumaa-portfolio.vercel.app/blog?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={schema} />;
}
