
## The ways to write better Python

-- From Effective Python By Brett Slatkin

### Know the Differences Between bytes, str, and unicode
In python 3, there are two types that represent sequences of characters: *bytes* and *str*.
Instance of bytes contain raw 8-bit values.
Instance of str contain Unicode characters.

The most common way to represent Unicode characters as binary data (raw 8-bit values) is encoding UTF-8.
Importantly, *str* instances in Python 3 do not have an associated with binary encoding. 
To convert Unicode characters to binary data, you must use the encode method.
To convert binary data to Unicode characters, you must use the decode method.

The core of your program should use Unicode character types (*str*) and should not assume anything about character encodings.

In Python 3, you'll need one method that takes a *str* or *bytes* and always returns a *str*.

	def to_str(bytes_or_str):
		if isinstance(bytes_or_str, bytes):
			value = bytes_or_str.decode('utf-8')
		else:
			value = bytes_or_str
		return value  # Instance of str

You'll need another method that takes a *str* or *bytes* and always returns a *bytes*.

	def to_bytes(bytes_or_str):
		if isinstance(bytes_or_str, str):
			value = bytes_or_str.encode('utf-8')
		else:
			value = bytes_or_str
		return value  # Instance of bytes

