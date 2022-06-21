nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// nums = [1, 2, 3, 4, 5, 6, 7, 8];

/* 
https://leetcode.com/problems/contains-duplicate/
Probably the easiest way to do it with two for loops
*/

// var containsDuplicate = function(nums) {

//     for (i=0; i < nums.length; i++) {
//         for (j=i+1; j < nums.length; j++) {
//             if (nums[i] == nums[j]) {
//                 return true
//             }
//         }
//     }

//     return false
// };

/*
more creative way of using a set which can't have repeating values 
*/

// var containsDuplicate = function (nums) {
//   let my_set = new Set(nums);
//   return nums.length !== my_set.size;
// };

// console.log(containsDuplicate(nums));

// probably the right way using a hashmap
// object's key has to be unique so we can use this to check
function Hash() {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      return true;
    } else {
      hash[nums[i]] = true;
    }
  }
  return false;
}

console.log(Hash(nums));
