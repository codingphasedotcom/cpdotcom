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

// self.addEventListener('install', function(event) {
// 	event.waitUntil(preLoad());
// });

// var preLoad = function() {
// 	console.log('Installing web app');
// 	return caches.open('offline').then(function(cache) {
// 		console.log('caching index and important routes');
// 		return cache.addAll([
// 			'/index.html',
// 			'/timeline/index.html',
// 			'/reviews/index.html',
// 			'/offline.html'
// 		]);
// 	});
// };

// self.addEventListener('fetch', function(event) {
// 	event.respondWith(
// 		checkResponse(event.request).catch(function() {
// 			return returnFromCache(event.request);
// 		})
// 	);
// 	event.waitUntil(addToCache(event.request));
// });
// self.addEventListener('fetch', event => {
// 	if (
// 		event.request.mode === 'navigate' ||
// 		(event.request.method === 'GET' &&
// 			event.request.headers.get('accept').includes('text/html'))
// 	) {
// 		event.respondWith(
// 			fetch(event.request).catch(error => {
// 				return caches.match(OFFLINE_URL);
// 			})
// 		);
// 	}
// });

// var checkResponse = function(request) {
// 	return new Promise(function(fulfill, reject) {
// 		fetch(request).then(function(response) {
// 			if (response.status !== 404) {
// 				fulfill(response);
// 			} else {
// 				reject();
// 			}
// 		}, reject);
// 	});
// };

// var addToCache = function(request) {
// 	return caches.open('offline').then(function(cache) {
// 		return fetch(request).then(function(response) {
// 			console.log(response.url + ' was cached');
// 			return cache.put(request, response);
// 		});
// 	});
// };

// var returnFromCache = function(request) {
// 	return caches.open('offline').then(function(cache) {
// 		return cache.match(request).then(function(matching) {
// 			if (!matching || matching.status == 404) {
// 				return cache.match('offline.html');
// 			} else {
// 				return matching;
// 			}
// 		});
// 	});
// };
