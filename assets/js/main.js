document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('hamburger-icon').addEventListener('click', () => {
		console.log('clicked');
		document.getElementById('mobileMenu').classList.toggle('active');
	});
});
