module.exports = {
  "not found": `nexss py install  <module> OR pip3 install <module>`,
  "ModuleNotFoundError: No module named 'bpy'":
    "This module needs to be run with blender compiler. Please make sure you have blender compiler added to the files section: \nfiles:\n\t- name: myfile.py\n\tcompiler: blender nexsstest.blend --background\n' ",
  "ModuleNotFoundError: No module named '(.*?)'":
    "nexss py install <module> OR pip3 install <module>"
};
