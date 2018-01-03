
var __main = function() {
    window.fps = 60
    window.pause = false
    var score = 0;
    // in utilies, for debug
    enableDebugMode(true)

	var game = Game()

	var paddle = Paddle()
	var ball = Ball()

    window.blocks = game.createBlocks(levels[0])

	game.registration('a', function() {
		paddle.moveLeft()
	})

	game.registration('d', function() {
		paddle.moveRight()
	})    	

	game.registration('b', function() {
		ball.fire()
	})

    game.registration('p', function() {
        window.pause = !window.pause
    })

	game.update = function() {

        if (window.pause){
            return
        }

        ball.move()

        if (ball.collide(paddle)) {
            ball.ySpeed *= -1
        }

        for (var i = blocks.length - 1; i >= 0; i--) {
            if (blocks[i].collide(ball)) {
                blocks[i].kill()
                ball.ySpeed *= -1
                score += 100
            }
        }
	}

	// draw the paddle and the ball
	game.draw = function() {

        // var img = new Image()
        // img.src = "background.png"
        // game.context.drawImage(img, 0, 0, 500, 500)

        game.context.fillStyle = "#9ACD32"
        game.context.fillRect(0, 0, 500, 500)

		game.drawImage(paddle)
		game.drawImage(ball)

        for (var i = blocks.length - 1; i >= 0; i--) {
            if (blocks[i].lives >= 1) {
                game.drawImage(blocks[i])        
            }
        }

        game.context.fillText('Score: '+score, 100, 380);
	}

    game.run()
}

__main()
