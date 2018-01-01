// wrap console.log for convenience
var log = console.log.bind(console)

var imageFromPath = function(path){
	var img = new Image()
	img.src = path
	return img
}

// for debug, currently pause the game
var enableDebugMode = function(enable) {
	if (!enable) {
		return 
	}

	window.paused = false
	window.addEventListener('keydown', (event) => {
		var k = event.key

		if (k == 'p') {
			// pause
			window.paused = !window.paused
		}
	})

	document.querySelector('#id-input-speed').addEventListener('input', (event) => {
		var input = event.target
		log(input.value)
		window.fps = Number(input.value)

	})
}
