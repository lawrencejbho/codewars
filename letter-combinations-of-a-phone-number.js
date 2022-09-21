// my original solution that still works pretty well

var letterCombinations = function (digits) {
  let res = [];
  let combinations = [];
  let dic = [
    0,
    0,
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];

  if (digits.length == 0) return [];

  function dfs(i) {
    if (i >= digits.length) {
      res.push(combinations.slice().join(""));
      return;
    }

    for (let j = 0; j < dic[digits[i]].length; j++) {
      combinations.push(dic[digits[i]][j]);
      dfs(i + 1);
      combinations.pop();
    }
  }

  dfs(0);
  return res;
};

// using a map instead which seems to be the fastest solution

var letterCombinations = function (digits) {
  let res = [];
  let combinations = [];
  let dic = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "qprs",
    8: "tuv",
    9: "wxyz",
  };

  if (digits.length == 0) return [];

  function dfs(i) {
    if (i >= digits.length) {
      res.push(combinations.slice().join(""));
      return;
    }

    for (let j = 0; j < dic[digits[i]].length; j++) {
      combinations.push(dic[digits[i]][j]);
      dfs(i + 1);
      combinations.pop();
    }
  }

  dfs(0);
  return res;
};

// small modification here where the for loop uses in instead of a j pointer
var letterCombinations = function (digits) {
  let res = [];
  let combinations = [];
  let dic = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "qprs",
    8: "tuv",
    9: "wxyz",
  };

  if (digits.length == 0) return [];

  function dfs(i) {
    if (i >= digits.length) {
      res.push(combinations.slice().join(""));
      return;
    }

    for (char in dic[digits[i]]) {
      combinations.push(dic[digits[i]][char]);
      dfs(i + 1);
      combinations.pop();
    }
  }

  dfs(0);
  return res;
};

/*
neetcode way using a map and iterating through the object 
also condenses the backtracking into the dfs function
*/

var letterCombinations = function (digits) {
  let res = [];
  let dic = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "qprs",
    8: "tuv",
    9: "wxyz",
  };

  if (digits.length == 0) return [];

  function dfs(i, cur) {
    if (i >= digits.length) {
      res.push(cur);
      return;
    }

    for (let char in dic[digits[i]]) {
      dfs(i + 1, cur + dic[digits[i]][char]);
    }
  }

  dfs(0, "");
  return res;
};
