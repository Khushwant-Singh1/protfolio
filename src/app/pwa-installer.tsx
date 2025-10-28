'use client';

import { useEffect, useRef } from 'react';

export function PWAInstaller() {
  const deferredPromptRef = useRef<Event | null>(null);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      deferredPromptRef.current = e;
      
      // You can show a custom install button here
      console.log('PWA install prompt available');
    };

    const handleAppInstalled = () => {
      console.log('PWA was installed');
      deferredPromptRef.current = null;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  return null;
}
