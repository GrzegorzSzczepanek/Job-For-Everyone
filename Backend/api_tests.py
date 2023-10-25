#!/bin/python

import os
import requests
import unittest
import json
import uuid

backend = "http://localhost:3000"

# Endpoints:
# - (get)  ping
# - (post) login
# - (post) register
# - (get)  publication
# - (get)  search
# - (get)  user
# - (post) post-comment
# - (post) post-reply


def debug(message):
    if os.environ.get("DEBUG") is not None:
        print("[DEBUG]", message)


def get(endpoint, data=None):
    res = requests.get(backend + endpoint, params=data)
    debug(endpoint + " => " + str(res.content))
    return json.loads(res.content)


def post(endpoint, data=None):
    res = requests.post(backend + endpoint, json=data)
    debug(endpoint + " => " + str(res.content))
    return json.loads(res.content)


def ok(res):
    return res["status"] == "OK"


class Tests(unittest.TestCase):
    def test_ping(self):
        self.assertEqual(get("/ping"), {"status": "pong"})

    def test_publication(self):
        self.assertTrue(ok(get("/publication", {"id": 1})))

    def test_search(self):
        self.assertTrue(len(get("/search", {"query": "test"})) > 0)

    def test_user(self):
        self.assertTrue(ok(get("/user", {"username": "test"})))

    def test_login(self):
        # fmt: off
        self.assertTrue(ok(post("/login", {"username": "test", "password": "test123"})))

    def test_register(self):
        username = "user-" + str(uuid.uuid4())
        password = str(uuid.uuid4())
        email = str(uuid.uuid4()) + "@gmail.com"
        # fmt: off
        self.assertTrue(ok(post("/register", {
            "username": username,
            "email": email,
            "password": password,
            "confirm_password": password
        })))

    def test_post_comment(self):
        # fmt: off
        self.assertTrue(ok(post("/post-comment", {"username": "test", "comment": "asdf"})))

    def test_post_reply(self):
        # fmt: off
        self.assertTrue(ok(post("/post-reply", {"username": "test", "reply": "asdf", "reply_to": 1})))


if __name__ == "__main__":
    unittest.main()
