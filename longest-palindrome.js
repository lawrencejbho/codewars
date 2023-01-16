var longestPalindrome = function (s) {
  let output = 1;
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == undefined) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }

    if (map[s[i]] % 2 == 0) {
      output += 2;
    }
  }

  if (output > s.length) {
    return s.length;
  }
  return output;
};
