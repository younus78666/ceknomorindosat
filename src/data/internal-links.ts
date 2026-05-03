/**
 * Central registry of every URL on the site.
 * Used by:
 *   - sitemap (auto)
 *   - RelatedLinks component (related-page suggestions)
 *   - Internal link auto-suggestion when authoring new pages
 *
 * When you add a new page or post, register it here so internal linking and
 * sitemap stay coherent. Each entry has tags used to compute related pages.
 */

export type ContentType = "page" | "post";

export interface PageEntry {
  slug: string; // url path without leading slash, e.g. "cara-cek-nomor-indosat"
  title: string;
  description: string;
  type: ContentType;
  tags: string[]; // used for related-page matching
  cluster: string; // topical cluster id
  publishedAt?: string; // ISO date
  updatedAt?: string; // ISO date
}

export const PAGES: PageEntry[] = [
  {
    slug: "",
    title: "Cek Nomor Indosat: Cara Cepat Melihat Nomor IM3 Sendiri",
    description:
      "Panduan resmi cek nomor Indosat IM3 lewat *888#, *123#, SMS, aplikasi myIM3, dan call center 185.",
    type: "page",
    tags: ["cek-nomor", "ussd", "im3", "myim3", "umb", "888", "123"],
    cluster: "cek-nomor",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
  },
  {
    slug: "cek-nomor-indosat-im3",
    title: "Cara Cek Nomor Indosat IM3 Sendiri",
    description:
      "Panduan praktis cek nomor IM3 lewat *888#, myIM3, pengaturan ponsel, SMS, dan call center, termasuk solusi error.",
    type: "page",
    tags: ["cek-nomor", "im3", "ussd", "myim3", "888", "esim", "troubleshoot"],
    cluster: "cek-nomor",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
  },
  {
    slug: "cek-nomor-indosat-lewat-ussd",
    title: "Cara Cek Nomor Indosat Lewat USSD",
    description:
      "Panduan USSD cek nomor IM3 lewat *888# dan *123# di Android dan iPhone, lengkap solusi MMI code invalid dan tips dual SIM.",
    type: "page",
    tags: ["cek-nomor", "ussd", "888", "123", "mmi", "android", "iphone", "dual-sim", "troubleshoot"],
    cluster: "cek-nomor",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
  },
  {
    slug: "cek-nomor-indosat-lewat-aplikasi-myim3",
    title: "Cara Cek Nomor Indosat di Aplikasi myIM3",
    description:
      "Panduan aplikasi myIM3: install, login OTP, lihat profil, paket aktif, dan solusi jika OTP tidak masuk.",
    type: "page",
    tags: ["cek-nomor", "myim3", "aplikasi", "otp", "login", "profil", "paket-aktif", "troubleshoot"],
    cluster: "cek-nomor",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
  },
  {
    slug: "cek-nomor-indosat-masih-aktif-atau-tidak",
    title: "Cara Cek Nomor Indosat Masih Aktif atau Tidak",
    description:
      "Cek status nomor IM3 (aktif, tenggang, atau hangus) lewat *888#, myIM3, dan tes panggilan, plus cara perpanjang masa aktif.",
    type: "page",
    tags: ["cek-nomor", "masa-aktif", "masa-tenggang", "hangus", "perpanjang", "im3", "888", "myim3", "status"],
    cluster: "masa-aktif",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
  },
  {
    slug: "cek-kuota-indosat",
    title: "Cara Cek Kuota Indosat Terbaru",
    description:
      "Cara cek kuota IM3 lewat *123*7*1#, SMS USAGE ke 363, dan myIM3, plus solusi data tidak update, bonus, dan kuota malam.",
    type: "page",
    tags: ["cek-kuota", "kuota-malam", "kuota-bonus", "kuota-aplikasi", "myim3", "ussd", "im3", "freedom-internet"],
    cluster: "kuota",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
  },
  {
    slug: "cek-pulsa-indosat",
    title: "Cara Cek Pulsa Indosat dengan Cepat",
    description:
      "Cek pulsa IM3 lewat *888#, myIM3, dan call center 185, plus cara cek dan hentikan langganan VAS lewat *726#.",
    type: "page",
    tags: ["cek-pulsa", "888", "ussd", "myim3", "vas", "726", "langganan-aktif", "transfer-pulsa"],
    cluster: "pulsa",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
  },
  {
    slug: "kode-dial-indosat",
    title: "Kode Dial Indosat Terbaru",
    description:
      "Daftar lengkap kode dial Indosat IM3 menurut tujuan: cek nomor, pulsa, kuota, beli paket, masa aktif, bantuan, dan registrasi.",
    type: "page",
    tags: ["kode-dial", "ussd", "umb", "888", "123", "726", "555", "363", "4444", "reference"],
    cluster: "reference",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
  },
  {
    slug: "nomor-call-center-indosat",
    title: "Nomor Call Center Indosat dan Cara Menghubungi Bantuan",
    description:
      "Daftar resmi call center Indosat IM3, email, Twitter @IndosatCare, dan portal care.im3.id, plus tips menyiapkan data sebelum menghubungi.",
    type: "page",
    tags: ["call-center", "185", "support", "care-im3", "twitter", "email", "live-chat", "keamanan"],
    cluster: "support",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
  },
  {
    slug: "cara-registrasi-kartu-indosat",
    title: "Cara Registrasi Kartu Indosat dengan NIK dan Nomor KK",
    description:
      "Registrasi kartu prabayar IM3 lewat SMS NIK#KK# ke 4444 atau aplikasi myIM3, plus cek status, solusi gagal, dan tips keamanan data.",
    type: "page",
    tags: ["registrasi", "nik", "kk", "4444", "dukcapil", "prabayar", "keamanan", "privacy"],
    cluster: "registrasi",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
  },
  {
    slug: "kode-cek-nomor-indosat-berubah",
    title: "Apakah Kode Cek Nomor Indosat Berubah?",
    description:
      "Kenapa kode cek nomor Indosat IM3 kadang berubah, cara verifikasi kode terbaru dari sumber resmi, dan langkah saat kode lama tidak merespon.",
    type: "post",
    tags: ["kode-dial", "ussd", "888", "123", "outdated", "verifikasi", "myim3", "care-im3"],
    cluster: "reference",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "kenapa-tidak-bisa-cek-nomor-indosat",
    title: "Kenapa Tidak Bisa Cek Nomor Indosat?",
    description:
      "Sembilan penyebab cek nomor IM3 gagal: sinyal, kartu belum aktif, MMI invalid, dual SIM, mode pesawat, masa tenggang, gangguan jaringan, dan solusinya.",
    type: "post",
    tags: ["troubleshoot", "ussd", "mmi", "888", "dual-sim", "masa-tenggang", "gangguan-jaringan", "myim3", "izin-ussd"],
    cluster: "cek-nomor",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "lupa-nomor-indosat",
    title: "Lupa Nomor Indosat? Ini Cara Menemukannya Lagi",
    description:
      "Delapan cara menemukan kembali nomor IM3 yang lupa: *888#, myIM3, WhatsApp, SMS lama, kontak teman, kemasan kartu SIM, sampai call center.",
    type: "post",
    tags: ["lupa-nomor", "888", "myim3", "whatsapp", "puk", "kemasan-sim", "telepon-teman", "support"],
    cluster: "cek-nomor",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "cek-nomor-im3-tanpa-aplikasi",
    title: "Cara Cek Nomor IM3 Tanpa Aplikasi",
    description:
      "Lima cara cek nomor IM3 tanpa install aplikasi: *888#, pengaturan ponsel, telepon teman, SMS lama, dan SIM Toolkit, plus opsi tanpa pulsa.",
    type: "post",
    tags: ["tanpa-aplikasi", "888", "ussd", "sim-toolkit", "feature-phone", "telepon-teman", "tanpa-pulsa", "tanpa-internet"],
    cluster: "cek-nomor",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "perbedaan-im3-dan-indosat",
    title: "Perbedaan IM3 dan Indosat yang Perlu Diketahui",
    description:
      "Penjelasan sederhana perbedaan IM3, Indosat, dan Indosat Ooredoo Hutchison, plus pengaruhnya pada cek nomor, kuota, pulsa, dan kontak support.",
    type: "post",
    tags: ["im3", "indosat", "ioh", "merger", "tri", "mentari", "brand", "history"],
    cluster: "background",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  // Trust / E-E-A-T / legal pages
  {
    slug: "tentang-kami",
    title: "Tentang CekNomorIndosat.com",
    description: "Situs panduan independen untuk pelanggan Indosat IM3.",
    type: "page",
    tags: ["tentang", "trust", "editorial", "independence"],
    cluster: "trust",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "kontak",
    title: "Kontak Redaksi CekNomorIndosat.com",
    description: "Saluran kontak redaksi, koreksi, dan kerja sama bisnis.",
    type: "page",
    tags: ["kontak", "trust", "redaksi"],
    cluster: "trust",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "kebijakan-editorial",
    title: "Kebijakan Editorial",
    description: "Cara tim meneliti, memverifikasi, memperbarui, dan mengoreksi panduan.",
    type: "page",
    tags: ["editorial", "trust", "verifikasi", "transparansi"],
    cluster: "trust",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "kebijakan-koreksi",
    title: "Kebijakan Koreksi",
    description: "Cara melaporkan kesalahan dan alur penanganan koreksi.",
    type: "page",
    tags: ["koreksi", "trust", "feedback"],
    cluster: "trust",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "penulis",
    title: "Tim Penulis",
    description: "Profil tim editorial CekNomorIndosat.com dan bidang keahlian.",
    type: "page",
    tags: ["penulis", "trust", "tim", "eeat"],
    cluster: "trust",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    description: "Pernyataan independensi dan batas tanggung jawab.",
    type: "page",
    tags: ["disclaimer", "legal", "trust", "independensi"],
    cluster: "legal",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: "Kebijakan privasi: data, cookie, analitik, dan iklan.",
    type: "page",
    tags: ["privacy", "legal", "cookie", "analytics"],
    cluster: "legal",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "terms",
    title: "Terms of Service",
    description: "Syarat dan ketentuan pemakaian situs.",
    type: "page",
    tags: ["terms", "legal", "tos"],
    cluster: "legal",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    description: "Cookie esensial, analitik, iklan, dan cara mengontrolnya.",
    type: "page",
    tags: ["cookie", "legal", "consent", "privacy"],
    cluster: "legal",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
];

export function getPageBySlug(slug: string): PageEntry | undefined {
  return PAGES.find((p) => p.slug === slug);
}

export function getRelated(slug: string, limit = 4): PageEntry[] {
  const current = getPageBySlug(slug);
  if (!current) return [];
  const scored = PAGES.filter((p) => p.slug !== slug).map((p) => {
    const sameCluster = p.cluster === current.cluster ? 3 : 0;
    const tagOverlap = p.tags.filter((t) => current.tags.includes(t)).length;
    return { entry: p, score: sameCluster + tagOverlap };
  });
  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.entry);
}

export function listPosts(): PageEntry[] {
  return PAGES.filter((p) => p.type === "post").sort((a, b) =>
    (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "")
  );
}

export function listPages(): PageEntry[] {
  return PAGES.filter((p) => p.type === "page");
}
