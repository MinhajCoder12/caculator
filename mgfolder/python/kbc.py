money = 0

print("\nThere is three simple questions, if you answer them correctly \nyou will get Dollers$.\n")

# Q1
Q1 = "Which city is the capital of 'Turkey'?"

print(Q1, "\n")

Q1_option = "1) Ankara     2) Istanbul\n\n3) Izmir      4) Bursa"

print(Q1_option)

Q1_input = int(input("\nQ1) Choose the correct answer: "))

if(Q1_input == 1):
  print("\nYOU WIN!\n")
  money =+ 100
  print(f"YOU WIN YOU GET {money}$\n")
  
else:
  print("\nYOU LOSE T-T\n")
  print("YOU LOSE THE OPERTUNITY TO MAKE 100$\n")




# Q2
Q2 = "Q2) HTML is also called?"

print(Q2, "\n")

Q2_option = '''1) Programming language    2) Scripting language\n\n3) Markup language       4) StyleSheet'''

print(Q2_option, "\n")

Q2_input = int(input("Choose the correct answer: "))

if(Q2_input == 3):
  print('\nYOU WIN!')
  money =+ 100
  Q2_lose = f"\nYOU GOT 100$ :)\n"
  print(Q2_lose)
else:
  print("\nYOU LOSE T-T\n")
  print("YOU LOSE THE OPERTUNITY TO MAKE 100$\n")

#Q3
Q3 = "Q3) Witch is Css Framework?"

print(Q3, "\n")

Q3_option = '''1) Bootstrap    2) Tailwind\n\n3) All of these       4) Non-Of-These'''

print(Q3_option, "\n")

Q3_inp = int(input("Choose the correct answer: "))


if(Q3_inp == 3):
  money =+ 100
  Q3_lose = '\nYOU GOT 100$ MORE NOW :)\n'
  print(Q3_lose)
else:
  print("\nYOU LOSE T-T\n")
  print("YOU LOSE THE OPERTUNITY TO MAKE 100$\n")

if(Q1_input==1 and Q2_input==3 and Q3_inp==3):
  print('YOU GOT 300$')

elif(Q1_input==1 and Q2_input==3):
  print('YOU GOT 200$')

elif(Q1_input==1 and Q3_inp==3):
  print("YOU GOT 200$")

elif(Q1_input or Q2_input or Q3_inp):
  print('YOU GOT 100$')
  
else:
  print("YOU LOST")