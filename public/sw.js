self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('codingphase').then(function(cache) {
			return cache.addAll([
				'/',
				'/index.html',
				'/timeline',
				'/timeline/index.html',
				'/reviews',
				'/reviews/index.html',
				// '/offline.html',
				'/css/styles.css',
				'/js/dist/main.js',
				'/manifest.json'
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});
