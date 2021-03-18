condition = True
print('condition = True')
print("====================================")
print('"Ok" if condition else "Not ok"')
my_result = "Ok" if condition else "Not ok"
print(my_result)
print("====================================")
print('("Not Ok", "Ok")[condition]')
my_result = ("Not Ok", "Ok")[condition]
print(my_result)

condition = None
print("condition = None")
print(condition or "NotOk")
