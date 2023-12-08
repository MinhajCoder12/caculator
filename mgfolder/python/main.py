# input = int(input("Give the number between 5 and 9: "))

# if(input<5 or input>9):
#     raise ValueError("I already said you this give the number between 5 and 9")

# else:
#     print("successfully completed")
# marks = [29, 89, 74, 74, 82, 48, 99]

# for index, marks in enumerate(marks, start=1):
#     print(f"{index}: {marks}")

#     if (index == 7):
#         print("Good job Minhaj")
 
cube = lambda x: x*x*x
l = [2, 3, 4, 1, 8]
newl = list(map(cube, l))
print(newl)

li = [4, 4, 8]
newnewl = list(filter(lambda x: x>4, l))
print(newnewl)