// src/lib/analytics.js
import { browser } from '$app/env';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';
import { app } from './firebase.js';

let analyticsPromise = null;

/**
 * Retourne l'instance Analytics uniquement dans le navigateur
 * et si l'environnement le supporte (ex: bloqueurs de pub / navigateurs restreints).
 */
export function getAnalyticsInstance() {
  if (!browser) return Promise.resolve(null);

  if (!analyticsPromise) {
    analyticsPromise = isSupported()
      .then((supported) => (supported ? getAnalytics(app) : null))
      .catch(() => null);
  }

  return analyticsPromise;
}

/**
 * Envoie un événement Analytics en toute sécurité
 */
export async function trackEvent(eventName, params = {}) {
  const analytics = await getAnalyticsInstance();
  if (!analytics) return;

  logEvent(analytics, eventName, params);
}