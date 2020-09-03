# Nexss PROGRAMMER - Blender/Python3
# Python 3.7

import platform
import json
import sys
import io
import os
from bpy import context
import bpy
from importlib import import_module

sys.path.append(os.getenv("NEXSS_PACKAGES_PATH") + "\\Nexss\\Lib\\")
import Blender
from NexssLog import nxsInfo, nxsOk, nxsWarn, nxsError

# STDIN
NexssStdin = sys.stdin.read()

parsedJson = json.loads(NexssStdin)

# nxsInfo("xxxxxxxxx");
# nxsOk("xxxxxxxxx");
# nxsWarn("xxxxxxxxx");
# nxsError("xxxxxxxxx");

# Blender -> Exec Script from Blender Script
# filename = os.path.join(os.path.dirname(bpy.data.filepath), "myscript.py")
# exec(compile(open(filename).read(), filename, 'exec'))

# Blender -> Exec Module from Blender Script
# import myscript
# import importlib
# importlib.reload(myscript)
# myscript.main()


# Switch to the scripting workspace (Console + Info)
bpy.context.window.workspace = bpy.data.workspaces["Scripting"]
bpy.ops.mesh.primitive_plane_add(size=2, enter_editmode=False, location=(0, 0, 0))
bpy.ops.object.editmode_toggle()

parsedJson["testxxxx"] = "tes123123123123t"

NexssStdout = json.dumps(parsedJson, ensure_ascii=False).encode('utf8','surrogateescape')
# STDOUT
print(NexssStdout.decode('utf8','surrogateescape'))
