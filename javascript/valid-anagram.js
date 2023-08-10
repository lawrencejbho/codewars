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
