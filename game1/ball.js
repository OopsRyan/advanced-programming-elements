
var Ball = function() {
	var image = imageFromPath('ball.png')
	var canvas = document.querySelector('#id-canvas')

	var o = {
		image: image,
		xSpeed: 10,
		ySpeed: 10,
		x:100,
		y:320,
		width: 30,
		height: 30,
		fired: false,
		max_width: canvas.width,
		max_height: canvas.height,
	}

	o.fire = function() {
		o.fired = true
	}

	o.move = function() {

		if (o.fired) {

    		if (o.x + o.width >= o.max_width || o.x <= 0) {
    			o.xSpeed *= -1
    		} else if (o.y <= 0 || o.y + o.height >= o.max_height) {
    			o.ySpeed *= -1
    		}

    		o.x += o.xSpeed
    		o.y += o.ySpeed
		}
	}

	o.collide = function(paddle) {
		
		return rectIntersect(paddle, o)
	}

	return o
}
