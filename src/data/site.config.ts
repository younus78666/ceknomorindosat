export const SITE = {
  name: "Panduan Cek Nomor Indosat",
  domain: "ceknomorindosat.com",
  url: "https://ceknomorindosat.com",
  locale: "id-ID",
  language: "id",
  description:
    "Panduan lengkap cek nomor Indosat IM3: kode dial, cek pulsa, kuota, masa aktif, registrasi kartu, dan kontak resmi. Informasi terbaru, mudah diikuti.",
  shortDescription:
    "Panduan praktis cek nomor, pulsa, dan kuota Indosat IM3.",
  author: "Tim Panduan Cek Nomor Indosat",
  publisher: "Panduan Cek Nomor Indosat",
  themeColor: "#ffd200",
  twitterHandle: "",
  // Set to "" to skip OG image meta; provide a real 1200x630 PNG to enable.
  defaultOgImage: "",
  legalDisclaimer:
    "CekNomorIndosat.com adalah situs panduan independen dan bukan situs resmi Indosat Ooredoo Hutchison.",
  lastUpdatedDefault: "Mei 2026",
} as const;

export const NAV_PRIMARY = [
  { label: "Beranda", href: "/" },
  { label: "Cek Nomor", href: "/cek-nomor-indosat-im3" },
  { label: "Cek Pulsa", href: "/cek-pulsa-indosat" },
  { label: "Cek Kuota", href: "/cek-kuota-indosat" },
  { label: "Kode Dial", href: "/kode-dial-indosat" },
  { label: "Blog", href: "/blog" },
] as const;

export const NAV_FOOTER = [
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Kontak", href: "/kontak" },
  { label: "Tim Penulis", href: "/penulis" },
  { label: "Kebijakan Editorial", href: "/kebijakan-editorial" },
  { label: "Kebijakan Koreksi", href: "/kebijakan-koreksi" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Sitemap", href: "/sitemap-index.xml" },
] as const;
