const CACHE_NAME = 'tile-calc-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './images/801T.jpg' // add more if needed
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
      .then(response => response || fetch(event.request))
  );
});
