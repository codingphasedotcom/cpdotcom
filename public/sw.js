//Delete all caches and keep only one
const cachNameToKeep = 'codingphase-11-01-19';

//Deletion should only occur at the activate event
self.addEventListener('activate', event => {
	var cacheKeeplist = [cachNameToKeep];
	event.waitUntil(
		caches
			.keys()
			.then(keyList => {
				return Promise.all(
					keyList.map(key => {
						if (cacheKeeplist.indexOf(key) === -1) {
							return caches.delete(key);
						}
					})
				);
			})
			.then(self.clients.claim())
	); //this line is important in some contexts
});

//Comment this whole area when working on development mode and then remove commnent when ready for production
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open(cachNameToKeep).then(function(cache) {
			return cache.addAll(['/', '/index.html', '/css/styles.css']);
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
