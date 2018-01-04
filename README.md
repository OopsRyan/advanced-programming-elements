# advanced-programming-styles

## Game 1 - Paddle and ball
1. The information on web development could be searched with the keyword "MDN" in the very beginning.
2. The program should be separated into a number of functions, and have only one entrance, main function, which should be named in a distinct format, like `__main()`.
3. The function designed for actions should be named with verbs in the very beginning. If the function returns an object, its name should begin with the name of object.
4. The objects must not reveal any detail in the main function. The details should be wrapped by methods.
5. In JS, the object's effect scope should be defined in 'var' rather than 'let const'.
6. When defining a json object or dictionaries, each line, especially the last line, should end with a ',' for consistency.
7. ES6 claims each line in JS cannot contain ';' in the end.
8. Anonymous functions should be defined exactly in the format like this, 
	
	var a = function() {

	}

9. Enter a space char after keywords `for` and `if`
10. When the same logic appears many time and runs various functions, it is essential to find out the pattern, such as the key event binding. Each pressed key means different methods to be run. The most effective way is to store the keys in a dictionary and bind functions for these keys. In the Game 1, I store the keys in a dictionary 'actions', and bind a function for each key (registration in the code).
11. Separate a file into many sub-files which achieve different functions. Put supportive functions in the file called 'utilities'.
12. If possible, design a function for debugging, like stopping the game in this case.
13. One of JS's shortcomings is asynchronous loading all images.
14. When writing if statement, the body of statement should not be too long, so usually write the oppsite predicate and return the function to avoid the orignial predicate containing a long body statment.

<img src="https://github.com/OopsRyan/advanced-programming-styles/blob/master/game1/materials/game1_demo.gif" width="200" height="200"/>
