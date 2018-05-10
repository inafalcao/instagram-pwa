
var deferredPrompt

if(!window.Promise) {
	windows.Promise = Promise
}

if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js' /* {scope: '/'} */) // register scope here if necessary.
		.then(function() {
			console.log('Service worker registered!')
		})
		.catch(function(err) {
			console.log('Error registering service worker', err)
		})
}

window.addEventListener('beforeinstallprompt', function(event) {
	console.log('beforeinstallprompt fired')
	event.preventDefault()
	deferredPrompt = event
	return false
})
