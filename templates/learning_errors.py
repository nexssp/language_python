# Nexss Programmer Error Learning Template - Python 3

def some_error():
    print(1 / 0)


try:
    some_error()
except Exception as e:  # print default error / not specified
    import sys
    # print("Error {0}".format(sys.exc_info()[0]))
    print(e)  # print error
else:
    try:
        with open('notexists.log') as file:
            read_data = file.read()
    except FileNotFoundError as some_error:
        print(some_error)
    except:
        print("Not standard error")
    else:
        print("all ok")
finally:
    print('That\' all')
