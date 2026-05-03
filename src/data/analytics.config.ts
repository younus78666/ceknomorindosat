/**
 * Analytics + consent configuration.
 * Paste IDs from your accounts. Empty string disables that integration.
 *
 * Where to find each ID:
 *   GA4_MEASUREMENT_ID  — analytics.google.com → Admin → Data Streams → Measurement ID (G-XXXXXXXXXX)
 *   GTM_ID              — tagmanager.google.com → Container → GTM-XXXXXXX
 *   CLARITY_PROJECT_ID  — clarity.microsoft.com → Settings → Setup → ten-character ID
 *   INDEXNOW_KEY        — UUID generated in public/<key>.txt
 *
 * Consent Mode v2 is enabled by default. If you only target Indonesian users
 * and do not need GDPR/UK PECR coverage, you can set REQUIRE_CONSENT=false to
 * skip the banner and load analytics on first visit. Indonesia's UU PDP still
 * requires a privacy policy and disclosure, both of which already exist.
 */

export const ANALYTICS = {
  GA4_MEASUREMENT_ID: "", // e.g. "G-XXXXXXXXXX"
  GTM_ID: "", // e.g. "GTM-XXXXXXX" (optional — leave blank to use direct gtag)
  CLARITY_PROJECT_ID: "", // e.g. "abc1234567"
  REQUIRE_CONSENT: true,
} as const;

export const INDEXNOW = {
  // Public verification file: public/169ce40444e342008e0511ca87032bab.txt
  KEY: "169ce40444e342008e0511ca87032bab",
} as const;
