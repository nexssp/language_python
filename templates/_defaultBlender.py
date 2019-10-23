# Nexss PROGRAMMER 2.0.0 - Python3
# Default template for JSON Data

import bpy
import platform
import json
import sys
import os
from pprint import pprint

# STDIN
NexssStdin = sys.stdin.read()

parsedJson = json.loads(NexssStdin)
# Modify Data
# parsedJson["PythonOutput"] = "Hello from Python! " + \
#     str(platform.python_version())

parsedJson["test"] = "test"

bpy.ops.mesh.primitive_monkey_add(location=(0, 0, 0))

scene = bpy.context.scene
# foo_objs = [obj for obj in scene.objects if obj.name.startswith("foo")]
pprint(scene.objects)


bpy.data.scenes['Scene'].render.filepath = os.path.join(os.getcwd(),'test2.jpg')
bpy.context.scene.render.resolution_x = 320
bpy.context.scene.render.resolution_y = 280
bpy.context.scene.render.image_settings.file_format='JPEG'
bpy.ops.render.render(write_still=True)
# bpy.ops.render.render(use_viewport = True, write_still=True)

# bpy.data.objects['ObjectName'].select_set(state=True)
# pprint(globals())
# pprint(locals())
# print(D.objects());
# pprint("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
# pprint(parsedJson)
NexssStdout = json.JSONEncoder().encode(parsedJson)
# STDOUT
sys.stdout.write(NexssStdout)
