
var Block = function() {
	var image = imageFromPath('block.png')

	var o = {
		image: image,
		x:100,
		y:320,
		width: 50,
		height: 20,
	}

	o.collide = function(ball) {
		
		if (o.y + o.height >= paddle.y && (o.x >= paddle.x && o.x <= paddle.x + paddle.width))
			return true

		return false
	}

	return o
}
