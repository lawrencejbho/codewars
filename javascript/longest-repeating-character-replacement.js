// let s = "AABABBA",
//   k = 1;

// let s = "ABAB",
//   k = 2;

// let s = "ABBB",
//   k = 2;

// let s = "ABAA",
//   k = 0;

let s =
  "KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF";
k = 4;

var characterReplacement = function (s, k) {
  let counter = 0;
  let i = 0;
  let j = 1;
  let position = 0;
  let max = 0;

  console.log("j " + j);

  while (j < s.length) {
    if (s[i] != s[j]) {
      counter++;
      position = j;
      if (counter > k) {
        i = position;
      }
    }
    while (s[j] == s[j + 1]) {
      j++;
    }
    max = Math.max(max, j - i + 1);
    j++;
  }
  return max;
};

// here is the correct answer
// so first we need to store our answers in a hash mask so that we can increment and decrement for specific letters
// as we traverse the entire string, everytime we go through a character on our right pointer we are going to add in the hash
// if the amount is greater than the max then update the max.  This is where the algo gets tricky.  Basically
// as we move on in the string and need replacements, we are going to subtract from the left pointer's value.  In
// most cases this is the original character that has the highest value.  Our right pointer will keep going through the string
// in O(n) time and keep adding to our hash mask.  The left then catches up if needed as we start needing too many replacements

const characterReplacement2 = (s, k) => {
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  while (right < s.length) {
    const char = s[right];
    visited[char] = visited[char] ? visited[char] + 1 : 1;

    if (visited[char] > maxCharCount) maxCharCount = visited[char];

    if (right - left + 1 - maxCharCount > k) {
      visited[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
};

// console.log(characterReplacement2(s, k));

// rewrote it myself but same as the last answer

const charReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let max = 0;
  let hash = {};

  while (right < s.length) {
    let char = s[right];
    hash[char] = hash[char] ? hash[char] + 1 : 1;
    if (hash[char] > max) max = hash[char];

    if (right - left + 1 - max > k) {
      hash[s[left]]--;
      left++;
    }
    right++;
  }
  return right - left;
};

console.log(charReplacement(s, k));
