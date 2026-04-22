// lib/gtag.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export const trackCTA = (label: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'cta_click', {
      event_category: 'CTA Button',
      event_label: label,
    })
  }
}