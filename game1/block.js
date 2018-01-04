
var Block = function(position) {
	
	// position is an array with the format [0,0,]

	var img = imageFromPath('./materials/block.png')

	// each function is a individual chunck. 
	// I dont like to use variables with a long name, so I define a temp 'p' to take 'position'
	var p = position

	var o = {
		image: img,
		x:p[0],
		y:p[1],
		width: 40,
		height: 19,
		lives: p[2] || 1 // if p[2] is None, then assign it with 1
	}

	o.kill = function () {
		o.lives -= 1
	}

	o.collide = function(ball) {
		var b = ball

		if (o.lives < 1) {
			return false
		}
		// predicate if the ball hits the top and bottom bandary of the block
		return rectIntersect(o, ball)
	}

	return o
}
