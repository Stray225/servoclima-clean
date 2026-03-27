'use client';

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const pageview = (url: string) => {
  if (!GA_ID) return;
  (window as any).gtag('config', GA_ID, { page_path: url });
};

export const trackConversion = () => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-18023933418/qsNhCPfl5oocEOrLvZJD',
      value: 1.0,
      currency: 'ARS',
    });
  }
};
