const CACHE_NAME = 'yol-radari-v2'; // her onemli guncellemede bu numarayi artir (v2, v3...)
const urlsToCache = [
  './',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // index.html icin: ONCE internetten taze veri dene, olmazsa (offline ise) onbellegi kullan
  if(event.request.mode === 'navigate' || event.request.url.endsWith('.html') || event.request.url.endsWith('/')){
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }
  // diger dosyalar (ikonlar vs) icin onbellek yeterli
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});