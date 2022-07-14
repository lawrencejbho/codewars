// this is a premium question on leetcode and lintcode doesn't have javascript

const strings = ["lint", "code", "love", "you"];
const strings2 = ["we", "say", ":", "yes"];

function encode(strs) {
  let str = "";
  for (let i = 0; i < strs.length; i++) {
    str += strs[i];
    str += ":;";
  }
  return str;
}

function decode(str) {
  let word = "";
  let hash = {};
  let number = 1;
  let colon = false;
  for (let i = 0; i < str.length; i++) {
    if (!hash[number]) {
      hash[number] = str[i];
    } else {
      hash[number] += str[i];
    }
    if (colon == true && str[i] == ";") {
      hash[number];
      number++;
    }
    if (str[i] == ":") {
      colon = true;
    }
  }
  let array = Object.values(hash);
  let res = [];
  for (let strings of array) {
    strings = strings.substring(0, strings.length - 2);
    console.log(strings);
    res.push(strings);
  }
  return res;
}

function encode2(strs) {
  let str = "";
  for (let i = 0; i < strs.length; i++) {
    str += strs[i];
    str = str + "#" + i;
  }
  return str;
}

function decode2(str) {
  let res = [];

  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "#") {
      res.push(str.substring(j, i));
      j = i + 2;
    }
  }
  return res;
}

console.log(encode2(strings));
console.log(decode2(encode2(strings2)));
