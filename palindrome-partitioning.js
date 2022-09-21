function partition(s) {
  let res = [];
  let part = [];

  function dfs(i) {
    if (i >= s.length) {
      res.push(part.slice());
      return;
    }
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        part.push(s.slice(i, j + 1));
        dfs(j + 1);
        part.pop();
      }
    }
  }

  function isPalindrome(s, l, r) {
    while (l < r) {
      if (s[l] != s[r]) return false;
      l++;
      r--;
    }
    return true;
  }

  dfs(0);
  return res;
}
