# Great tutorial about modules and packages, importing __main__ __init__ etc
# https://www.devdungeon.com/content/python-import-syspath-and-pythonpath-tutorial

import subprocess
import sys
import pip

# import sys
# sys.path # displays path to import

# import sys
# print(sys.executable)

# windows
# set PYTHONPATH=C:\pypath1\;C:\pypath2\ # this will add this to import paths
# linux/ mac
# export PYTHONPATH='/some/extra/path'

# python -c "import sys; print(sys.path)"

# import site
# import sys

# site.addsitedir('/the/path')  # Always appends to end


# in the code
# import imp
# imp.find_module('numpy') or numpy.__file__

# import numpy
# help(numpy)

modulename = 'numpy'
if modulename not in sys.modules:
    print 'You have not imported the {} module'.format(modulename)


def install(name):
    subprocess.call(['python', '-m pip', 'install', name])


def install_and_import(package):
    import importlib
    try:
        importlib.import_module(package)
    except ImportError:
        import pip
        pip.main(['install', package])
    finally:
        globals()[package] = importlib.import_module(package)


install('numpy')

# # The system default python:
# $ python - m pip install fish

# # A virtualenv's python:
# $ .env/bin/python - m pip install fish

# # A specific version of python:
# $ python-3.6 - m pip install fish
