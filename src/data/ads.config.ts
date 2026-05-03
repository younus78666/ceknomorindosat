/**
 * Ad slot registry — Adsterra and Monetag.
 * Each slot has a stable id used in the AdSlot component and a network/zone pair.
 * Until you have publisher accounts, leave zoneId empty — slots render as
 * accessibility-friendly placeholders during development.
 *
 * Recommended split (no policy conflicts):
 *   Monetag  -> popunder, social bar, push (background formats, page-wide)
 *   Adsterra -> display banner + native (in-content visible formats)
 */

export type AdNetwork = "adsterra" | "monetag" | "none";

export interface AdSlotConfig {
  id: string;
  network: AdNetwork;
  zoneId: string; // paste from publisher dashboard once approved
  format: "banner" | "native" | "social-bar" | "popunder" | "push";
  size?: { w: number; h: number }; // for display banners only
  label: string; // shown in dev placeholder
}

export const AD_SLOTS: Record<string, AdSlotConfig> = {
  // After QuickAnswer box — top of article
  "post-answer": {
    id: "post-answer",
    network: "none",
    zoneId: "",
    format: "banner",
    size: { w: 728, h: 90 },
    label: "Iklan setelah jawaban cepat",
  },
  // Mid-content
  "mid-content": {
    id: "mid-content",
    network: "none",
    zoneId: "",
    format: "native",
    label: "Iklan tengah konten",
  },
  // Before FAQ section
  "pre-faq": {
    id: "pre-faq",
    network: "none",
    zoneId: "",
    format: "banner",
    size: { w: 300, h: 250 },
    label: "Iklan sebelum FAQ",
  },
  // Footer area (above legal footer)
  "footer-area": {
    id: "footer-area",
    network: "none",
    zoneId: "",
    format: "banner",
    size: { w: 728, h: 90 },
    label: "Iklan area footer",
  },
  // Sitewide background
  "site-popunder": {
    id: "site-popunder",
    network: "none",
    zoneId: "",
    format: "popunder",
    label: "Popunder situs",
  },
  "site-social-bar": {
    id: "site-social-bar",
    network: "none",
    zoneId: "",
    format: "social-bar",
    label: "Social bar situs",
  },
};

export const ADS_ENABLED = false; // master switch
