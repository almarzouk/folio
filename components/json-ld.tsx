"use client";

import React from "react";
import Script from "next/script";
import { useI18n } from "@/components/i18n-provider";

interface JsonLdProps {
  data: object;
  id: string;
}

export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const SITE = "https://jumaa-portfolio.vercel.app";

export function PersonSchema() {
  const { messages: m } = useI18n();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jumaa Almarzouk",
    jobTitle: m.jsonLd.jobTitle,
    description: m.jsonLd.personDescription,
    url: SITE,
    image: `${SITE}/photo.png`,
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

  return <JsonLd id="json-ld-person" data={schema} />;
}

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
      url: SITE,
    },
    publisher: {
      "@type": "Person",
      name: "Jumaa Almarzouk",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/JA.png`,
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    url: url,
    image: image || `${SITE}/og-image`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return <JsonLd id="json-ld-blog-posting" data={schema} />;
}

export function WebsiteSchema() {
  const { messages: m } = useI18n();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jumaa Almarzouk",
    description: m.jsonLd.websiteDescription,
    url: SITE,
    author: {
      "@type": "Person",
      name: "Jumaa Almarzouk",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd id="json-ld-website" data={schema} />;
}
