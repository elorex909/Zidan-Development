// Bumped on every deploy that changes any pre-cached file (index.html,
// presentation_data.js, manifest.json, logos). Bumping this name is what
// makes the browser fetch fresh copies instead of silently continuing to
// serve whatever was cached the first time this site was ever opened —
// without a bump, updates to those files can be invisible to returning
// visitors (and to the admin testing their own changes) indefinitely.
const CACHE_NAME = 'zidan-v2';
const ASSETS = [
  'index.html',
  'presentation_data.js',
  'manifest.json',
  'images/logo-white.png',
  'images/logo-dark.png'
];

self.addEventListener('install', e => {
  // Activate this new service worker immediately instead of waiting for
  // every open tab to be closed first.
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  // Delete any cache left over from a previous CACHE_NAME so stale
  // pre-v2 copies of presentation_data.js etc. can never be served again,
  // and take control of any already-open tabs right away.
  e.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Only ever serve cached responses for our own pre-cached, same-origin
  // GET assets. Everything else (API calls to jsonbin/Cloudinary, POST
  // uploads, etc.) always goes straight to the network untouched.
  if (e.request.method !== 'GET' || ASSETS.indexOf(e.request.url.split('/').pop()) === -1) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('index.html')))
  );
});
