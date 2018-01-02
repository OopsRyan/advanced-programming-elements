
var Paddle = function() {
	var image = imageFromPath('paddle.png')

	var o = {
		image: image,
		speed: 10,
		x: 100,
		y: 320,
		width: 64,
		height: 16,
	}

    // for cut-off status, change first, and then check if it makes sense.
    o.move = function(position) {
        if (o.x < 0) {
            o.x = 0
        } else if (o.x > 500 - o.width) {
            o.x = 500 - o.width
        } else {
            o.x = position
        }
    }

	o.moveLeft = function() {
		o.move(o.x -= o.speed)
	}

	o.moveRight = function() {
		o.move(o.x += o.speed)
	}

	return o
}