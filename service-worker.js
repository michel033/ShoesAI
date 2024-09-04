const CACHE_NAME = 'shoemaster';
const urlsToCache = [
  '/shoeai',
  '/shoeai/index.html',
  '/shoeai/styles.css',
  '/shoeai/README.md',
  '/shoeai/favicon.ico',
  '/shoeai/manifest.json',
  '/shoeai/service-worker.js',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/shoeai/tfjs/group1-shard1of2.bin',
  '/shoeai/tfjs/group1-shard2of2.bin',
  '/shoeai/tfjs/model.json',
  'shoeai/images/icons/icon-72x72.png',
  'shoeai/images/icons/icon-96x96.png',
  'shoeai/images/icons/icon-128x128.png',
  'shoeai/images/icons/icon-144x144.png',
  'shoeai/images/icons/icon-152x152.png',
  'shoeai/images/icons/icon-192x192.png',
  'shoeai/images/icons/icon-384x384.png',
  'shoeai/images/icons/icon-512x512.png',
  
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
