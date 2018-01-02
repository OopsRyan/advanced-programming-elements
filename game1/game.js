
var Game = function() {
	var game = {
		actions: {},
		keydowns: {},
	}

	var canvas = document.querySelector("#id-canvas")
	game.canvas = canvas

	var context = canvas.getContext('2d')
	game.context = context

	game.drawImage = function(o) {
		game.context.drawImage(o.image, o.x, o.y, o.width, o.height)
	}	  	

    game.createBlocks = function(level) {
        
        var blocks = []
        for (var i = level.length - 1; i >= 0; i--) {
            blocks.push(Block(level[i]))
        }
        return blocks
    }

    // events
    window.addEventListener('keydown', (event) => {
		
        if ("012".includes(event.key)) {
            window.blocks = game.createBlocks(levels[Number(event.key)])
        }else {
            game.keydowns[event.key] = true    
        }
        
	})

	window.addEventListener('keyup', (event) => {

		game.keydowns[event.key] = false
	})

	game.registration = function(key, callback) {
		game.actions[key] = callback
	}

    var runLoop = function() {
        var actions = Object.keys(game.actions)
        for (var i = actions.length - 1; i >= 0; i--) {
            var key = actions[i]
            if (game.keydowns[key]) {
                // when the key is pressed, call its action
                game.actions[key]()
            }
        }

        game.update()
        context.clearRect(0, 0, canvas.width, canvas.height)
        game.draw()

        setTimeout(function() {
        runLoop()
        }, 1000/window.fps)
    }

    game.run = function() {
        setTimeout(function() {
            runLoop()
        }, 1000/window.fps)
    }

	return game
}
