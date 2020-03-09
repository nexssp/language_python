module.exports = {
  "not found": `nexss py install <module> OR pip3 install <module>`,
  "ModuleNotFoundError: No module named 'bpy'": `This module needs to be run with blender compiler. 
Please make sure you have blender compiler added to the files section: 
files:
  - name: myfile.py
    compiler: blender nexsstest.blend --background

Or please add to the top of your python file (example without .blend file):

# nexss-compiler: blender --background
`,
  "ModuleNotFoundError: No module named '(.*?)'":
    "nexss py install <module> OR pip3 install <module>"
};
