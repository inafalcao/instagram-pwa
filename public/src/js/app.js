
if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js' /* {scope: '/'} */) // register scope here if necessary.
		.then(function() {
			console.log('Service worker registered!');
		});
}