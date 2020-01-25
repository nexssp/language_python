# Nexss PROGRAMMER 2.0.0 - Python3
# Default template for JSON Data
# Python 2.7

import platform
import json
import sys
import io

reload(sys)
sys.setdefaultencoding('utf8')

# STDIN
NexssStdin = sys.stdin.read()

parsedJson = json.loads(NexssStdin)
# print(parsedJson)
# Modify Data
parsedJson["PythonOutput"] = "Hello from Python! " + \
     str(platform.python_version())

NexssStdout = json.dumps(parsedJson, ensure_ascii=False)
# STDOUT
print((NexssStdout))
