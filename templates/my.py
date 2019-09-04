# Nexss PROGRAMMER 2.0.0 - Python3
# Default template for JSON Data

import platform
import json
import sys
import codecs

if sys.version_info[0] >= 3:
    sys.stdin.reconfigure(encoding='utf-8')
# else:
#     UTF8Writer = codecs.getwriter('utf8')
#     sys.stdout = UTF8Writer(sys.stdout)
#     UTF8Reader = codecs.getreader('utf8')
#     sys.stdin = UTF8Reader(sys.stdin)


# STDIN
NexssStdin = sys.stdin.read()

parsedJson = json.loads(NexssStdin)
# Modify Data
parsedJson["PythonOutput"] = "Hello from Python! " + \
    str(platform.python_version())

# parsedJson["test"] = "test"

NexssStdout = json.JSONEncoder().encode(parsedJson)
# STDOUT
sys.stdout.write(NexssStdout)
