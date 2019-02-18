# Anagram
 checks if two words are anagrams.
 
anagram('cellar', 'recall')  # returns True
anagram('cat', 'act')        # returns True
anagram('arm', 'elbow')      # returns False

# Procedure

step 1 : Take two string .
step 2 : Split the two string to get each character .
step 3 : Sort the function as per their ASCII number .
step 4 : Join all the character in string .
step 5 : Call anagram and check if length different it directly returns false 
          else it checks(===) and return true if same 
