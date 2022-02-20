import random

def guess(x):
    random_number = random.randint(1, x)
    guess = 0

    while guess != random_number: # creating a while loop to keep going until the correct number is guessed
        guess = input(f'Guess a number bettweeen 1 and {x}')
        print(guess)

guess(10)

#stopped at 10:42 in the 12 begin python projectts witht kim ying video