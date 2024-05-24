class Solution(object):
    def isHappy(self, n):
        seen = set() #salvar os valores
        while n != 1 and n not in seen: #verifica se o n ja foi testado
            seen.add(n)
            digits = [int(digit) for digit in str(n)]
            n = sum(digit**2 for digit in digits)
        return n == 1