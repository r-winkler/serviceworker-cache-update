navigator.serviceWorker.register('service-worker.js', {
    scope: './' // Everything is served by the service worker
});

navigator.serviceWorker.ready.then(() => console.log("Service Worker registered and ready 🚀 If you refresh the page, all assets are served by the service-worker 😎"));
