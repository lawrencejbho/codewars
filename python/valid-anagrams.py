class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        map = {}

        if len(t) < len(s):
            return False

        for char in s:
            if char in map:
                map[char] += 1
            else:
                map[char] = 1

        for value in t:
            if value in map:
                map[value] -= 1
                if map[value] < 0:
                    return False
            else:
                return False

        return True
