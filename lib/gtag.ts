// lib/gtag.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export const trackCTA = (label: string) => {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'cta_click', {
        event_category: 'CTA Button',
        event_label: label,
      });
    }
  } catch (e) {
    console.error('Error tracking CTA:', e);
  }
}