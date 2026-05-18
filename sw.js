const CACHE_NAME = 'notebook-pwa-v2';

// Core app shell
let urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// CDN resources for better offline support
let cdnUrls = [
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Cache core files + CDNs
        return cache.addAll([...urlsToCache, ...cdnUrls]);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Strategy: Cache first for our app + known CDNs
  if (urlsToCache.includes(requestUrl.pathname) || cdnUrls.includes(event.request.url)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((response) => {
          // Cache new responses
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
    return;
  }

  // Default: Network first, fallback to cache
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});