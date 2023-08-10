class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:

        map = {}

        for num in nums:
            if num in map:
                return True
            map[num] = 1

        return False


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:

        hashset = set()

        for num in nums:
            if num in hashset:
                return True
            hashset.add(num)

        return False
