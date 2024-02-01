// service-worker.js
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('spell-cards-store').then((cache) => cache.addAll([
      '/',
      '/index.html',
      // Add other assets you want to cache
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
