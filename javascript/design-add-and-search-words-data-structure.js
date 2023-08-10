/* This problem is so slow that all answers seem to get runtime error sometimes

A normal trie, but we need to dfs in the case where we get a . Make sure to use a map if you use nodes.  Or you need
to know how to use the Object methods.   

*/

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

var WordDictionary = function () {
  this.root = new TrieNode();
};

// standard addWord in a trie but using a Map instead.
WordDictionary.prototype.addWord = function (word) {
  let current = this.root;
  for (let i of word) {
    if (!current.children.has(i)) current.children.set(i, new TrieNode());
    current = current.children.get(i);
  }
  current.isWord = true;
};

// need to DFS anytime we get a .
WordDictionary.prototype.search = function (word) {
  function dfs(index, node) {
    let current = node;
    for (let i = index; i < word.length; i++) {
      //index gets updated as we progress through the word
      let c = word[i];
      if (c == ".") {
        for (let value of current.children.values()) {
          // for every value in the children DFS
          if (dfs(i + 1, value)) return true; // increase i+1 here as we're checking the next letter
        }
        return false;
      } else {
        if (!current.children.has(c)) return false; // normal check if the letter is one of the children if not return false

        current = current.children.get(c); // normal progress to the next letter
      }
    }
    return current.isWord; // once we get passed the for loop, we return whether isWord is true/false
  }
  return dfs(0, this.root);
};
