// let s = "abcabcbb";
// let s = "pwwkew";
// let s = "bbbbbb";
// let s = "";
// let s = "dvdf";
let s = "ckilbkda";

// this is the neetcode video solution
// so the trick here is the while loop when we find a duplicate, when we get a duplicate we keep deleting the first
// entry until we delete the duplicate, this effectively helps us find the next longest substring

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let longest = 0;
  let i = 0;
  for (let j = 0; j < s.length; j++) {
    while (set.has(s[j])) {
      set.delete(s[i]);
      i++;
    }
    console.log(i);
    set.add(s[j]);
    longest = Math.max(longest, j - i + 1);
  }
  return longest;
}

console.log(lengthOfLongestSubstring(s));

// this one is better, from neetcode

var lengthOfLongestSubstring3 = function (str) {
  const hash = {};
  let start = 0;
  let max = 0;

  for (let j = 0; j < str.length; j++) {
    let rightChar = str[j];

    if (!(rightChar in hash)) hash[rightChar] = 0;
    hash[rightChar] += 1;

    while (hash[rightChar] > 1) {
      let leftChar = str[start];
      start += 1;

      if (leftChar in hash) hash[leftChar] -= 1;
      if (hash[leftChar] === 0) delete hash[leftChar];
    }
    max = Math.max(max, j - start + 1);
  }
  return max;
};

// this one has a very slow runtime like O(n^2)
var lengthOfLongestSubstring2 = function (s) {
  let j = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let hash = {};
    let localMax = 1;
    j = i + 1;
    max = Math.max(max, localMax);
    while (j < s.length) {
      console.log(hash);
      console.log(j);
      hash[s[i]] = 1;
      if (hash[s[j]] != null) {
        console.log("null");
        break;
      } else {
        hash[s[j]] = 1;
        j++;
        localMax++;
        max = Math.max(max, localMax);
      }
    }
  }
  return max;
};
