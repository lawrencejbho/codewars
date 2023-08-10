// this is exactly the same as fibonacci except you add in an additional recursive call which makes sense because
// it's three

var tribonacci = function (n) {
  let result = resolve(n, []);
  return result;
};

function resolve(n, memo) {
  if (memo[n] !== undefined) return memo[n];
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n == 2) return 1;
  let res = resolve(n - 1, memo) + resolve(n - 2, memo) + resolve(n - 3, memo);
  memo[n] = res;
  //   console.log(memo);
  return res;
}
