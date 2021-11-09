# Class example based on: https://docs.python.org/3/tutorial/classes.html

class MyClass():
    def __init__(self, name):
        self.name = name
        self.tricks = []    # creates a new empty list for each dog

    def add_trick(self, trick):
        self.tricks.append(trick)


x = MyClass()
