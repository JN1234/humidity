import sqlite3
import requests
import random


def updateData():
    myobj = {'humidity': str(
        random.randrange(20, 50, 3)), 'temperature': str(
        random.randrange(20, 50, 3))}

    url = 'http://localhost:3000/data/1/' + \
        myobj['humidity']+'/'+myobj['temperature']

    x = requests.patch(url=url)
    print(x.text)


while True:
    updateData()
