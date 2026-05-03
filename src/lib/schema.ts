import { SITE } from "~/data/site.config";

/**
 * JSON-LD generators. Output objects ready for <script type="application/ld+json">.
 * All schemas are independent and can be combined in a @graph if needed.
 */

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.locale,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.publisher,
      url: SITE.url,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/cari?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export interface ArticleInput {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export function articleSchema(a: ArticleInput, type: "Article" | "BlogPosting" = "Article") {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: a.headline,
    description: a.description,
    inLanguage: SITE.locale,
    mainEntityOfPage: a.url,
    image: a.image ??
      (SITE.defaultOgImage && SITE.defaultOgImage.length > 0
        ? new URL(SITE.defaultOgImage, SITE.url).toString()
        : `${SITE.url}/favicon.svg`),
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    author: {
      "@type": "Organization",
      name: a.author ?? SITE.author,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.publisher,
      url: SITE.url,
    },
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  };
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface HowToInput {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration, e.g. "PT2M"
}

export function howToSchema(h: HowToInput) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: h.name,
    description: h.description,
    inLanguage: SITE.locale,
    totalTime: h.totalTime,
    step: h.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface WebPageInput {
  type:
    | "WebPage"
    | "AboutPage"
    | "ContactPage"
    | "CollectionPage"
    | "ProfilePage";
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function webPageSchema(p: WebPageInput) {
  return {
    "@context": "https://schema.org",
    "@type": p.type,
    name: p.name,
    description: p.description,
    url: p.url,
    inLanguage: SITE.locale,
    datePublished: p.datePublished,
    dateModified: p.dateModified ?? p.datePublished,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.publisher,
      url: SITE.url,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.publisher,
    url: SITE.url,
    description: SITE.description,
    foundingDate: "2026",
    knowsLanguage: ["id", "en"],
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      url: `${SITE.url}/kontak`,
      availableLanguage: ["Indonesian"],
    },
    disclaimer: SITE.legalDisclaimer,
  };
}

export interface PersonInput {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
}

export function personSchema(p: PersonInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: p.name,
    jobTitle: p.jobTitle,
    description: p.description,
    url: p.url,
    worksFor: {
      "@type": "Organization",
      name: SITE.publisher,
      url: SITE.url,
    },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
