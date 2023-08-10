
# import module as myModule
import module
# from module import myFunction


# import package.module1 as module1

from package import *

i = 0
while i < 6:
    print(i)
    i += 1

module.myFunction()
# myFunction()


# module1.functionModule1()
module1.functionModule1()


def my_function(parameter2, parameter1="test", ):
    # Function code here
    print(f"{parameter2}")


my_function("blah", "blah2")
