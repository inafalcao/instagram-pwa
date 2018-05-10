self.addEventListener('install', function(event) {
	console.log('[Service Worker] Installing service worker.', event)
})

self.addEventListener('activate', function(event) {
	return self.clients.claim() // todo: research more about this
})

self.addEventListener('fetch', function(event) {
	event.respondWith(fetch(event.request))
})
