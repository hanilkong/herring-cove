
console.log('Started', self);
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cachename').then(function(cache) {
      return cache.addAll(
        [
          '/images/**'
        ]
      );
    })
  );
  self.skipWaiting();
  console.log('Installed', event);
});
self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});
self.addEventListener('push', function(event) {
  console.log('Push message received', event);
  // TODO
});
