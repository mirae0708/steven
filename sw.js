const CACHE_NAME = 'jongdari-pb-v42-cache';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script_v10.js',
  './manifest.json',
  './bg.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/screenshot-mobile.png',
  './icons/screenshot-desktop.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) return response;
        return fetch(event.request).then(networkResponse => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        });
      })
  );
});
