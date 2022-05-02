
nums = [1,1,1,3,3,4,3,2,4,2]

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

var containsDuplicate = function(nums) { 
    let my_set = new Set(nums) 
    return nums.length !== my_set.size
}

console.log(containsDuplicate(nums))