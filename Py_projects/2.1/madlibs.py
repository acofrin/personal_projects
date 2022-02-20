# #string concatenation practice
# #makiing a string that says "I want to travel to ___"
#destination = "Utah"

# #a few wattd to do this 
#print("I want to travel to " + destination)
#print("I want to travel to {}".format(destination))
# #prefer this way, using an f function
# print(f"I want to travel to {destination}") 

dest = input("Place: ")
verb = input("Verb: ")
famous_person = input("Famous Person: ")

madlib = f"I want to travel to {dest}. In {dest} I would {verb}. I hope that while I'm there I meet {famous_person}! " 

print(madlib)