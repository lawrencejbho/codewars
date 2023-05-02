var canConstruct = function (ransomNote, magazine) {
  let hash = {};

  for (let i = 0; i < magazine.length; i++) {
    if (hash[magazine[i]] == null) {
      hash[magazine[i]] = 1;
    } else {
      hash[magazine[i]]++;
    }
  }

  console.log(hash);

  let hash1 = {};
  for (let i = 0; i < ransomNote.length; i++) {
    if (hash[ransomNote[i]] == null) {
      return false;
    } else if (hash[ransomNote[i]] <= 0) {
      return false;
    } else {
      hash[ransomNote[i]]--;
    }
  }

  return true;
};
