import curses
from curses import wrapper
import time
import random


def start_screen(stdscr):
    stdscr.clear() #emptys screen
    stdscr.addstr("Welcome too the Speed Typing Test!") #add text
    stdscr.addstr("\nPress any key to begin!") #\n indicates next line
    stdscr.refresh() #refershes screen
    stdscr.getkey() #waits for user to type, and shows its value
    
def display_text(stdscr, target, current, wpm=0): #if nothing is passed for 0 it will have default parameter of 0 
    stdscr.addstr(target) #adding targettext to the screen
    stdscr.addstr(1, 0, F"WPM: {wpm}") #will display the WPM below the text. 

    for i, char in enumerate(current): #enumerates chareachter
        correct_char = target[i]
        color = curses.color_pair(1) #if target and current are the same, it will appear green
        if char != correct_char: 
            color = curses.color_pair(2) #if it is not the same, it will appear red

        stdscr.addstr(0, i, char, color)

def load_text(): #opening and reading the text file
    with open("text.txt", "r") as f:
        lines = f.readlines()
        return random.choice(lines).strip()

def wpm_test(stdscr):
    target_text = load_text() #grabs a line from text file
    current_text = [] #registers what the user types
    wpm = 0 #wpm is 0 to start
    start_time = time.time() #calculates start time 
    stdscr.nodelay(True) #calculates time even when not typing (overrides .getkey)

    while True:
        time_elaspsed = max(time.time() - start_time, 1) #current time - start time = time passed. max avoids division error of 0
        wpm = round((len(current_text) / (time_elaspsed / 60)) / 5)  #calculates words per minute. assumes avg word length is 5 char. rounded. 

        stdscr.clear() # need to clear so only typed text appears
        display_text(stdscr, target_text, current_text, wpm) 
        stdscr.refresh()

        if "".join(current_text) == target_text: #converting 'current' list to string, then comparing to target            
            stdscr.nodelay(False)
            break

        try:
            key = stdscr.getkey() #wont crash if nothing is typed
        except:
            continue # brings us back to othe top

        if ord(key) ==27: #27 is escape, will take you out of the loop.
            break 

        if key in ("KEY_BACKSPACE", '\b', "\x7f"): #backspace in different operating systems 
            if len(current_text) > 0:
                current_text.pop() #removes last element from list
        elif len(current_text) < len(target_text): #it wont allow you to type past target text
            current_text.append(key) #once they type, it appends and loops (below)


def main(stdscr):
    #creating colors that indicate if text is correct
    curses.init_pair(1, curses.COLOR_GREEN, curses.COLOR_BLACK)
    curses.init_pair(2, curses.COLOR_RED, curses.COLOR_BLACK)
    curses.init_pair(3, curses.COLOR_WHITE, curses.COLOR_BLACK)

    start_screen(stdscr) #calls the start screen
    while True: #creates a loop so if escape isnt pressed, you will play again
        wpm_test(stdscr) #calls the test
        stdscr.addstr(2,0, "You completed the text! Press any key to continue...") # gives a closing statement
        key = stdscr.getkey() 
        
        if ord(key) == 27:
            break

wrapper(main)

