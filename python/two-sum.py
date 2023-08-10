class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        map = {}

        for index, num in enumerate(nums):
            diff = target - num
            if diff in map:
                return [map[diff], index]

            map[num] = index
