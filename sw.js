const VERSION = "v1";

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request;

    if (request.method != "GET"){
        return;
    }

    //buscar en caché

    event.respondWith(cachedResponse(request))

    //actualizar el caché

    event.waitUntil(updateCache(request))

})
async function precache () {
    const cache = caches.open(VERSION);

    cache.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/BigBuckBunny.mp4',
    ])

}

function cachedResponse (request) {
    const cache = caches.open(VERSION);
    const response = await cache.match(request)

    return response || fetch(request);
}

function updateCache (request) {
    const cache = caches.open(VERSION);

    const response = await fetch(request);
    return cache.put(request, response);
   
}

