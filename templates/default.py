# Nexss PROGRAMMER 2.0.0 - Python3
# Default template for JSON Data
# Python 3.7

import platform
import json
import sys
import io

# sys.stdin.reconfigure(encoding='utf-8')

# reload(sys)
# sys.setdefaultencoding("utf-8")

# STDIN
NexssStdin = sys.stdin.read()

parsedJson = json.loads(NexssStdin)

# Modify Data
# parsedJson["PythonOutput"] = "Hello from Python! " + \
#     str(platform.python_version())

parsedJson["test"] = "test"

NexssStdout = json.dumps(parsedJson, ensure_ascii=False).encode('utf8','surrogateescape')
# STDOUT
print(NexssStdout.decode('utf8','surrogateescape'))
