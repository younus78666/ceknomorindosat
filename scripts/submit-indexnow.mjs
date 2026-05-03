/**
 * IndexNow submitter — pushes URL list to Bing/IndexNow which fans out to
 * Yandex, Naver, Seznam.
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs              # submit all 26 URLs
 *   node scripts/submit-indexnow.mjs /url1 /url2  # submit specific URLs
 *
 * Verify the key file is reachable BEFORE running:
 *   curl https://ceknomorindosat.com/169ce40444e342008e0511ca87032bab.txt
 *   (must return the key string)
 */

const HOST = "ceknomorindosat.com";
const KEY = "169ce40444e342008e0511ca87032bab";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const TOP_10 = [
  "/",
  "/cek-nomor-indosat-im3",
  "/cek-nomor-indosat-lewat-ussd",
  "/cek-kuota-indosat",
  "/cek-pulsa-indosat",
  "/kode-dial-indosat",
  "/cara-registrasi-kartu-indosat",
  "/tentang-kami",
  "/kebijakan-editorial",
  "/disclaimer",
];

const ALL_URLS = [
  ...TOP_10,
  "/cek-nomor-indosat-lewat-aplikasi-myim3",
  "/cek-nomor-indosat-masih-aktif-atau-tidak",
  "/nomor-call-center-indosat",
  "/blog",
  "/kode-cek-nomor-indosat-berubah",
  "/kenapa-tidak-bisa-cek-nomor-indosat",
  "/lupa-nomor-indosat",
  "/cek-nomor-im3-tanpa-aplikasi",
  "/perbedaan-im3-dan-indosat",
  "/kontak",
  "/kebijakan-koreksi",
  "/penulis",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
];

const argv = process.argv.slice(2);
const targets = argv.length > 0 ? argv : ALL_URLS;
const urlList = targets.map((p) => `https://${HOST}${p.startsWith("/") ? p : "/" + p}`);

console.log(`IndexNow submission to ${ENDPOINT}`);
console.log(`Host: ${HOST}`);
console.log(`Key location: ${KEY_LOCATION}`);
console.log(`URLs: ${urlList.length}`);

const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

try {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  console.log(`Status: ${res.status} ${res.statusText}`);
  if (text) console.log(`Response: ${text}`);
  if (!res.ok) process.exit(1);
  console.log("Success. IndexNow accepts within 10 minutes typically.");
} catch (e) {
  console.error("Submission failed:", e.message);
  process.exit(1);
}
