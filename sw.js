const CACHE_NAME = 'zidan-v1';
const ASSETS = [
  'index.html',
  'presentation_data.js',
  'manifest.json',
  'images/logo-white.png',
  'images/logo-dark.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('index.html')))
  );
});
