// keep in mind an anagram isn't the word in reverse, it just uses all of the same letters

(s = "anagram"), (t = "nagaram");

function anagram() {
  if (s.length != t.length) {
    return false;
  }
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      hash[s[i]] += 1;
    } else {
      hash[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]]) {
      hash[t[i]] -= 1;
      if (hash[t[i]] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

console.log(anagram());

//better way to do it, that is more concise with less comparisons


function anagram2() {
  if (s.length !== t.length) {
    return false;
  }

  const dict = {};

  for (let i = 0; i < s.length; i++) {
    if (!dict[s[i]]) {
      dict[s[i]] = 1;
    } else {
      dict[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!dict[t[i]] || dict[t[i]] <= 0) {
      return false;
    }
    dict[t[i]]--;
  }

  return true;
}
