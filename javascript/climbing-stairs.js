// it calculates the same way as fibonacci somehow even though the base cases are different
// basically with memoization, it's the same base cases, same recursive calls, you just pass in another variable
// which is the hash set so that if we do run into something we've done before then we can immediately grab it
// so it's really just setting up the code to run in that same way

var climbStairs = function (n) {
  let result = resolve(n, []);
  return result;
};

function resolve(n, memo) {
  if (memo[n] !== undefined) return memo[n];
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;
  let res = resolve(n - 1, memo) + resolve(n - 2, memo);
  memo[n] = res;
  //   console.log(memo);
  return res;
}

console.log(climbStairs(4));
