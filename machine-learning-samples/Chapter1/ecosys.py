import requests
import os

r = requests.get(r"https://api.github.com/users/acombs/starred")
data = r.json()

# print(data)

pwd