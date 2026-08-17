"use client";

import React from "react";
import Script from "next/script";
import { useI18n } from "@/components/i18n-provider";
import { SITE } from "@/lib/site";

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

export function PersonSchema() {
  const { messages: m } = useI18n();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jumaa Almarzouk",
    jobTitle: m.jsonLd.jobTitle,
    description: m.jsonLd.personDescription,
    url: SITE.portfolio,
    image: `${SITE.portfolio}/photo.png`,
    email: SITE.email,
    telephone: "+4917674724437",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Haselünne",
      addressRegion: "Emsland",
      addressCountry: "DE",
    },
    sameAs: [SITE.github, SITE.linkedin],
    knowsAbout: [
      "PHP",
      "Laravel",
      "React",
      "Next.js",
      "Vue.js",
      "React Native",
      "MySQL",
      "REST APIs",
      "JavaScript",
      "Node.js",
      "Tailwind CSS",
      "Web Development",
      "Mobile Development",
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
      url: SITE.portfolio,
    },
    publisher: {
      "@type": "Person",
      name: "Jumaa Almarzouk",
      logo: {
        "@type": "ImageObject",
        url: `${SITE.portfolio}/JA.png`,
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    url: url,
    image: image || `${SITE.portfolio}/og-image`,
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
    url: SITE.portfolio,
    author: {
      "@type": "Person",
      name: "Jumaa Almarzouk",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.portfolio}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd id="json-ld-website" data={schema} />;
}
