const CACHE_NAME = 'estilismo-cache-v2';
const DYNAMIC_CACHE = 'estilismo-dynamic-v2';
const urlsToCache = [
  './',
  './estilismo_app.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Instalar service worker
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Archivos en caché');
        return cache.addAll(urlsToCache);
      })
      .catch(error => console.error('Error al cachear archivos:', error))
  );
  self.skipWaiting();
});

// Activar service worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME && cache !== DYNAMIC_CACHE) {
            console.log('Service Worker: Eliminando caché antiguo:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia de caché: Cache First con Network Fallback
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        // Si no está en caché, buscar en la red
        return fetch(event.request)
          .then(fetchResponse => {
            // Verificar si la respuesta es válida
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
              return fetchResponse;
            }
            
            // Clonar la respuesta para poder usarla
            const responseToCache = fetchResponse.clone();
            
            // Agregar al caché dinámico
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return fetchResponse;
          })
          .catch(() => {
            // Si falla la red, mostrar página offline (opcional)
            if (event.request.destination === 'document') {
              return caches.match('./estilismo_app.html');
            }
          });
      })
  );
});
