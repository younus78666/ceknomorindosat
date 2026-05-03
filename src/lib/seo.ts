import { SITE } from "~/data/site.config";

export interface SEOInput {
  title: string;
  description: string;
  canonicalPath: string; // e.g. "/cara-cek-nomor-indosat"
  ogImage?: string;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
  /** Skip appending " | SITE.name" to <title>. Use when title already brand-complete. */
  noSuffix?: boolean;
}

export interface SEOResolved {
  title: string;
  fullTitle: string;
  description: string;
  canonical: string;
  ogImage: string | null;
  ogType: "website" | "article";
  noindex: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author: string;
  keywords?: string[];
}

export function resolveSEO(input: SEOInput): SEOResolved {
  const canonical = new URL(input.canonicalPath, SITE.url).toString();
  const rawOgImage = input.ogImage ?? SITE.defaultOgImage;
  const ogImage =
    rawOgImage && rawOgImage.length > 0
      ? new URL(rawOgImage, SITE.url).toString()
      : null;
  const fullTitle =
    input.title.length === 0
      ? SITE.name
      : input.noSuffix
        ? input.title
        : `${input.title} | ${SITE.name}`;

  return {
    title: input.title,
    fullTitle,
    description: input.description.slice(0, 158),
    canonical,
    ogImage,
    ogType: input.type ?? "website",
    noindex: input.noindex ?? false,
    publishedTime: input.publishedTime,
    modifiedTime: input.modifiedTime,
    author: input.author ?? SITE.author,
    keywords: input.keywords,
  };
}
