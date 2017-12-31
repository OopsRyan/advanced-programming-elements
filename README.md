# advanced-programming-styles

## Game 1 - Paddle and ball
1. The information on web development could be searched with the keyword "MDN" in the very beginning.
2. The program should be separated into a number of functions, and have only one entrance, main function, which should be named in a distinct format, like `__main()`.
3. The function designed for actions should be named with verbs in the very beginning. If the function returns an object, its name should begin with the name of object.
4. The objects must not reveal any detail in the main function. The details should be warppered by methods.
5. In js, the object's effect scope should be defined in 'var' rather than 'let const'.
6. When defining a json object or dictionaries, each line, especially the last line, should end with a ',' for consistency.
7. ES6 claims each line in js cannot contain ';' in the end.
8. Anonymous functions should be defined exactly in the format like this, 

	
	var a = function() {

	} 
9. Enter a space char in `for` and `if`

![Game1](https://github.com/OopsRyan/advanced-programming-styles/blob/master/game1/game1_demo.gif?raw=true)