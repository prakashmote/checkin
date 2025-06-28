self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('checkin-cache').then(cache => cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/check_in.png',
        // '/icon-512.png'
      ]))
    );
  });
  
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(response => response || fetch(e.request))
    );
  });
  