// the console logs here really help with understanding whats happening

var permute = function (nums) {
  const res = [];

  if (nums.length == 1) return [nums.slice()];

  // our state tree will run per each number
  for (let i = 0; i < nums.length; i++) {
    // this is where we try make the choice
    let n = nums.shift();
    // recursive call with that choice
    let permutations = permute(nums);
    // console.log(permutations);
    for (const perm of permutations) {
      perm.push(n);
      res.push(perm);
    }
    // console.log(permutations);
    // this is where we undo our choices
    nums.push(n);
  }

  return res;
};
