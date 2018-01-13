
## The ways to write better Python

-- A Summary From Effective Python By Brett Slatkin

### Know the Differences Between bytes, str, and unicode
In python 3, there are two types that represent sequences of characters: *bytes* and *str*.
Instance of bytes contain raw 8-bit values.
Instance of str contain Unicode characters.

The most common way to represent Unicode characters as binary data (raw 8-bit values) is encoding UTF-8.
Importantly, *str* instances in Python 3 do not have an associated with binary encoding. 
To convert Unicode characters to binary data, you must use the encode method.
To convert binary data to Unicode characters, you must use the decode method.

The core of your program should use Unicode character types (*str*) and should not assume anything about character encodings.

In Python 3, you'll need one helper method that takes a *str* or *bytes* and always returns a *str*.

	def to_str(bytes_or_str):
		if isinstance(bytes_or_str, bytes):
			value = bytes_or_str.decode('utf-8')
		else:
			value = bytes_or_str
		return value  # Instance of str

You'll need another helper method that takes a *str* or *bytes* and always returns a *bytes*.

	def to_bytes(bytes_or_str):
		if isinstance(bytes_or_str, str):
			value = bytes_or_str.encode('utf-8')
		else:
			value = bytes_or_str
		return value  # Instance of bytes

There is one big gotcha when dealing with  raw 8-bit values and Unicode characters in Python 3.
Operations involving file handles (returned by the *open* built-in function) default to UTF-8 encoding. For example, say you want to write some random binary data to a file. This breaks.
You must indicate that the data is being opened in write binary mode **('wb')** instead of write character mode **('w')**.

	with open('tmp/random.bin', 'wb') as f:
		f.write(os.urandom(10))

This problem also exists for reading data from files. The solution is the same: Indicate binary mode by using **'rb'** instead of **'r'** when opening a file.

### Write Helper Functions Instead of Complex Expressions

	my_values = {'red': ['5'], 'green': [''], 'blue': ['0']}

	## version_1
	my_values.get('red')  # => ['5']
	my_values.get('green')  # => ['']
	my_values.get('opacity')  # => None

	## version_2
	## using 'or' expression to deal with the empty string like ''
	## the empty string implicitly evaluates to False, causing the 'or' expression to evaluate to 0
	red = my_values.get('red', [''])[0] or 0
	green = my_values.get('green', ['']) or 0
	opacity = my_values.get('opacity', ['']) or 0
	>>> 
	red: '5'
	green: 0
	opacity: 0

	## version_3
	## want to ensure that all the parameter values are integers so you can use them in mathematical expressions.
	red = int(my_values.get('red', [''])[0] or 0)
	## this is now extremely hard to read. there are so much visual nosie.

	## version_4
	red = my_values.get('red', [''])
	red = int(red[0]) if red[0] else 0
	## but if/else statement over multiple lines

	## version_5
	## Writing a helper function is the way to go, especially if you need to use this logic repeatedly.
	def get_first_int(values, key, default=0):
		found = values.get(key, [''])
		if found[0]:
			found = int(found[0])
		else:
			found = default
		return found

	green = get_first_int(my_values, 'green')

As soon as your expressions get complicated, it's time to consider splitting them into smaller pieces and moving logic into helper functions. What you gain in readability always outweighs what brevity may have afforded you.
