#!/bin/python

import requests

backend = "http://localhost:3000"


def get(endpoint, data):
    res = requests.get(backend + endpoint, params=data)
    print(res.content)
    return res.content


def post(endpoint, data):
    res = requests.post(backend + endpoint, json=data)
    print(res.content)
    return res.content


post("/post-comment", {"username": "user", "comment": "asdf", "review": False})
post("/post-comment", {"username": "user", "comment": "asdf"})

get("/user", {"username": "user"})
