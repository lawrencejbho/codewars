// not sure if this is the best in terms of time complexity because of the sort method is like an extra log n
// we first loop through the array of strings and sort them so they come up in the same order when we put into hash
// if it's the first time, it'll save it in our hash as an array of the original str
// any duplicates here will get added as additional strings into the array in the hash
// now we just need to print out the output in array format
// time complexity here is O(m n logn)

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

var groupAnagrams = function (strs) {
  let hash = {};

  for (let str of strs) {
    var sorted = str.split("").sort().join("");
    if (hash[sorted] == undefined) {
      hash[sorted] = [str];
    } else {
      hash[sorted].push(str);
    }
  }
  //   for (let arr in hash) {
  //     output.push(hash[arr]);
  //   }

  return Object.values(hash);
};

console.log(groupAnagrams(strs));

// trying another way when not using sort, to try to reduce the time complexity to O(m n)

var groupAnagrams2 = function (strs) {
  let hash = {};
  for (let str of strs) {
    let keys = new Array(26).fill(0); // this creates an array of 26 0s
    for (let c of str) {
      keys[c.charCodeAt(0) - 97] += 1; // add +1 to each 0 that corresponds to a letter
    }
    if (!hash[keys]) hash[keys] = []; // if new 26 hash then create the value as an array
    hash[keys].push(str); // creates the hash table for each 26 0s and pushes str into an array
  }
  return Object.values(hash);
};

console.log(groupAnagrams2(strs));
