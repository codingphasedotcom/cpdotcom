document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('hamburger-icon').addEventListener('click', () => {
		console.log('clicked');
		document.getElementById('mobileMenu').classList.toggle('active');
	});
});
if (navigator.serviceWorker) {
	navigator.serviceWorker
		.register('/sw.js')
		.then(function(registration) {
			console.log(
				'ServiceWorker registration successful with scope:',
				registration.scope
			);
		})
		.catch(function(error) {
			console.log('ServiceWorker registration failed:', error);
		});
}
