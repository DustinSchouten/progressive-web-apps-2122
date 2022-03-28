const CORE_CACHE_NAME = 'core-cache';
const CORE_ASSETS = [
    '/',
    '/images/icon.png',
    '/images/image_skeleton.png',
    '/styles/style.css',
    '/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CORE_CACHE_NAME)
        .then(cache => cache.addAll(CORE_ASSETS))
        .then(() => self.skipWaiting())
    )
});

self.addEventListener('activate', event => {
    console.log(event)
}); 
   
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});