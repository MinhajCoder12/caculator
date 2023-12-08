import random

print("WEllCOME TO ROCK,PAPER,CIZER GAME:\n")

l = ["Rock", "Paper", "Cizer"]

op = f'''1) {l[0]}          2) {l[1]}           3) {l[2]}'''

print(op, "\n")

print("Rock for 0")
print("Paper for 1")
print("Cizer for 2\n")

ui = str(input("Write what you choose: "))

random_number = random.randint(1, 3)
st = str(random_number)

if(st=="1"):
    print("\nThe choice of computer is Rock !!!!")

elif(st=="2"):
    print("\nThe choice of computer is Paper !!!!")

elif(st=="3"):
    print("\nThe choice of computer is Cizer !!!")

try:    
    if (ui=="0"):
        print("\nYour answer is Rock")

    elif (ui=="1"):
        print("\nYour answer is Paper")

    elif (ui=="2"):
        print("\nYour answer is Cizer")

except:
    print("\nEnter the number not an Alphabet or unique valuse :)\n")


if(ui == "0" and st == "1"):
    print("\nYOU LOSE T-T\n")

elif(ui == "1" and st == "2"):
    print("\nYOU LOSE T-T\n")

elif(ui == "2" and st == "3"):
    print("\nYOU LOSE T-T\n")


else:
    print("\nYOU WIN :)\n")