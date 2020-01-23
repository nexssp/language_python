# Nexss PROGRAMMER 2.0.0 - Python3
# Default template for JSON Data

import platform
import json
import sys
# STDIN
NexssStdin = sys.stdin.read()

parsedJson = json.loads(NexssStdin)
# Modify Data
# parsedJson["PythonOutput"] = "Hello from Python! " + \
#     str(platform.python_version())

parsedJson["test"] = "test"

NexssStdout = json.JSONEncoder().encode(parsedJson)
# STDOUT
sys.stdout.write(NexssStdout)
