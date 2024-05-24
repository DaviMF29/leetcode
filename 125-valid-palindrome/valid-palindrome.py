class Solution(object):
    def isPalindrome(self, s):
        processed_string = ''.join(char.lower() for char in s if char.isalnum())
        inverted = processed_string[::-1]
        return processed_string == inverted