document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('hamburger-icon').addEventListener('click', () => {
		console.log('clicked');
		document.getElementById('mobileMenu').classList.toggle('active');
	});
});

if (!navigator.serviceWorker.controller) {
	navigator.serviceWorker.register('/sw.js').then(function(reg) {
		console.log('Service worker has been registered for scope: ' + reg.scope);
	});
}
