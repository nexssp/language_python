# import numpy as np
import pip

import json
import sys
import platform

data = sys.stdin.read()


sys.stdout.write(data)


# print(sys.executable)
# print(platform.python_version())
# print('Hello World from python!', sys.version_info[0])


# def install(package):
#     if hasattr(pip, 'main'):
#         pip.main(['install', package])
#     else:
#         pip._internal.main(['install', package])


# install("numpy")


#sys.stdout.write("IT works python")
# sys.stdout.write(sys.version_info[0])


# compute_input.py


# Read data from stdin


def read_in():
    lines = sys.stdin.readlines()
    # Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])


# def main():
#     # get our data as an array from read_in()
#     lines = read_in()

#     # create a numpy array
#     np_lines = np.array(lines)

#     # use numpys sum method to find sum of all elements in the array
#     lines_sum = np.sum(np_lines)

#     # return the sum to the output stream
#     print(lines_sum)


# # start process
# if __name__ == '__main__':
#     main()
