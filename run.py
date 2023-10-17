#!/bin/python

import multiprocessing
import subprocess
import os
import distutils.spawn
from os import system, name

suffix = ""
if name == "nt":
    suffix = ".exe"

def clear():
    if name == "nt":
        _ = system("cls")
    else:
        _ = system("clear")


def binary_exists(binary):
    return distutils.spawn.find_executable(binary+suffix)


def backend_start():
    os.chdir("Backend")
    if binary_exists("bun"):
        subprocess.run(["bun"+suffix, "install"])
        subprocess.run(["bun"+suffix, "src/index.ts"])
    elif binary_exists("node"):
        subprocess.run(["npm"+suffix, "install"])
        subprocess.run(["node"+suffix, "src/index.ts"])
    else:
        print("Neither bun nor npm+node is available. Exiting")
        exit(1)


def frontend_start():
    os.chdir("Frontend")
    if binary_exists("bun"):
        subprocess.run(["bun"+suffix, "install"])
        subprocess.run(["bun"+suffix, "run", "dev", "--", "--open"])
    elif binary_exists("node"):
        subprocess.run(["npm"+suffix, "install"])
        subprocess.run(["npm"+suffix, "run", "dev", "--", "--open"])
    else:
        print("Neither bun nor npm is available. Exiting")
        exit(1)

if __name__ == "__main__":
    clear()
    print(
        """
    Starting the app
    \x1b[33m================\x1b[00m
    """
    )
    print("[\x1b[34m!\x1b[00m] Starting backend on port 3000")
    backend = multiprocessing.Process(target=backend_start)
    backend.start()

    print("[\x1b[34m!\x1b[00m] Starting frontend on port 5173\n")
    frontend = multiprocessing.Process(target=frontend_start)
    frontend.start()
