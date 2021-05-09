import importlib

name = 'test_module'
# method 1
module = importlib.import_module('test_module')
# method 2
module = __import__(name, fromlist=[''])

module.some_func()
