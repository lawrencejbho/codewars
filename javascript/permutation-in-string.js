// const s1 = "ab",
//   s2 = "eidbaooo";

const s1 = "ab",
  s2 = "eidboaoo";

var checkInclusion = function (s1, s2) {
  let hash1 = {};
  let hash2 = {};

  for (let i = 0; i < s1.length; i++) {
    let char = s1[i];
    if (hash1[char] == null) {
      hash1[char] = 0;
      hash2[char] = 0;
    }
    hash1[char]++;
  }

  for (let i = 0; i < s2.length; i++) {
    let char = s2[i];
    if (char in hash2) {
      hash2[char]++;
    }
  }

  let matches = 0;
  let matched = 0;

  for (let chars in hash1) {
    if (hash1[chars] === hash2[chars]) {
      matches++;
    }
    matched++;
  }

  const last = s2.length - s1.length;

  for (let i = 0; i < last; ++i) {
    if (matches === matched) {
      return true;
    }
  }

  const ch1 = s2[i];
  const ch2 = s2[i + s1.length];

  if (ch1 in s1Chars) {
    if (s1Chars[ch1] === s2Chars[ch1]--) {
      --matches;
    } else if (s1Chars[ch1] === s2Chars[ch1]) {
      ++matches;
    }
  }

  if (ch2 in s1Chars) {
    if (s1Chars[ch2] === s2Chars[ch2]++) {
      --matches;
    } else if (s1Chars[ch2] === s2Chars[ch2]) {
      ++matches;
    }
  }

  console.log(matched);
  return matches === matched;
};

console.log(checkInclusion(s1, s2));
