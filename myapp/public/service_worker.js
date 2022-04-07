const CORE_CACHE_NAME = 'core-cache';
const CORE_ASSETS = [
    '/styles/style.css',
    '/offline'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CORE_CACHE_NAME)
        .then(cache => cache.addAll(CORE_ASSETS))
        .then(() => self.skipWaiting())
    )
});

self.addEventListener('activate', event => {
    console.log('activated')
}); 
   
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
        .catch(function(err) {
            console.log('ServiceWorker registration failed: ', err);
            console.log(event)
            return caches.match('/offline');
        })
    )
    
});