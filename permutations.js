// the console logs here really help with understanding whats happening

var permute = function (nums) {
  const res = [];

  if (nums.length == 1) return [nums.slice()];

  for (const i of nums) {
    // this is where we try make the choice
    let n = nums.shift();
    let permutations = permute(nums);
    // console.log(permutations);
    for (const perm of permutations) {
      perm.push(n);
    }
    // console.log(permutations);
    permutations.forEach((perm) => {
      res.push(perm);
      //   console.log(res);
    });
    // this is where we undo our choices
    nums.push(n);
  }

  return res;
};
