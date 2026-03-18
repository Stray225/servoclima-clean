export const trackConversion = () => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-18023933418/qsNhCPfl5oocEOrLvZJD",
      value: 1.0,
      currency: "ARS",
    });
  }
};
