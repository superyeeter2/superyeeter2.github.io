self.addEventListener('install', event => {
    console.log("SW installed");
});

self.addEventListener('fetch', event => {
    event.respondWith(fetch('/index.html'))
});
