const GA4_MEASUREMENT_ID = "G-RF74K1KKBS";
const ALLOWED_ORIGIN = "https://atividades.fonosuite.com";
const PAGE_LOCATION = `${ALLOWED_ORIGIN}/`;
const PAGE_TITLE = "Atividades educativas para linguagem | Sônia Torres";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: Gtag;
  }
}

export function initAnalytics() {
  if (typeof window === "undefined" || window.location.origin !== ALLOWED_ORIGIN) return;
  if (window.gtag || window.dataLayer || document.querySelector('script[src*="googletagmanager.com"], script[src*="google-analytics.com"]')) return;

  try {
    window.dataLayer = [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer?.push(args);
    };

    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("set", {
      page_location: PAGE_LOCATION,
      page_referrer: "",
      page_title: PAGE_TITLE,
    });
    window.gtag("js", new Date());
    window.gtag("config", GA4_MEASUREMENT_ID, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_domain: "atividades.fonosuite.com",
      cookie_prefix: "atividades",
      cookie_flags: "SameSite=Lax;Secure",
      ignore_referrer: true,
    });
    window.gtag("event", "page_view", {
      send_to: GA4_MEASUREMENT_ID,
      page_path: "/",
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
    script.referrerPolicy = "no-referrer";
    document.head.appendChild(script);
  } catch {}
}

export function trackActivityReceived() {
  if (typeof window === "undefined" || window.location.origin !== ALLOWED_ORIGIN || !window.gtag) return;

  window.gtag("event", "activity_received", {
    send_to: GA4_MEASUREMENT_ID,
    page_path: "/",
  });
}
