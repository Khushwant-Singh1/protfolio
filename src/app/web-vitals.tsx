'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Only log in production for real metrics
    if (process.env.NODE_ENV === 'production') {
      // You can send to your analytics service
      console.log(metric);
      
      // Example: Send to Google Analytics
      // window.gtag?.('event', metric.name, {
      //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      //   event_label: metric.id,
      //   non_interaction: true,
      // });
    }
  });

  return null;
}
