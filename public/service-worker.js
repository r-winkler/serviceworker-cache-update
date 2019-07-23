var CACHE = 'cache-and-update';


self.addEventListener('install', function (evt) {
    console.log('The service worker is being installed.');

    evt.waitUntil(precache().catch(err => console.log("Something went wrong!", err)));
});

self.addEventListener('fetch', function (evt) {
    console.log('The service worker is serving the asset.');

    // get reponse from cache otherweise fetch it
    evt.respondWith(fromCache(evt.request).catch(() => fetch(evt.request)));

    // update cache
    evt.waitUntil(update(evt.request));
});

function precache() {
    return caches.open(CACHE).then(function (cache) {
        return cache.addAll([
            './index.html',
            './images/4y8uN8evYLs.jpg',
            './images/7cW-1XGR6N0.jpg',
            './images/7kuBDaMoRL4.jpg',
            './images/8D8A181QwZA.jpg',
            './images/70-yTF1xMMs.jpg',
            './images/AoLkcXdQoNs.jpg',
            './images/d-WEVU_bLPg.jpg',
            './images/DJIN7ogUcrg.jpg',
            './images/eAskFEq5DNE.jpg',
            './images/fuFWs32HR6M.jpg',
            './images/Gey6OS4ZZH8.jpg',
            './images/GpZxVz-bngY.jpg',
            './images/H8N4Qsbdn6I.jpg',
            './images/hPYiwTyEHhU.jpg',
            './images/I4mtysWsLVU.jpg',
            './images/7cW-1XGR6N0.jpg',
            './images/JCvog7ApK4Q.jpg',
            './images/rQC-Nl4Bmmw.jpg',
            './images/vcUe4HX2lVA.jpg',
        ]);
    });
}

function fromCache(request) {
    return caches.open(CACHE).then(function (cache) {
        return cache.match(request).then(function (matching) {
            return matching || Promise.reject('no-match');
        });
    });
}

function update(request) {
    return caches.open(CACHE).then(function (cache) {
        return fetch(request).then(function (response) {
            return cache.put(request, response);
        });
    });
}