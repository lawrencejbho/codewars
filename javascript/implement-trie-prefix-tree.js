// we can use a for loop to help us create the nodes and also do our searches just by going character by character

class Trie {
  constructor() {
    this.root = {};
  }

  // think of a trie as basically assigning objects within an object
  // if the letter is missing, we add the letter as an object/property to the last object and then move to that node
  // isWord is a property that get assigned to the last letter in the word
  insert(word) {
    let cur = this.root;
    for (let c of word) {
      if (cur[c] == null) cur[c] = {};
      cur = cur[c];
    }
    cur.isWord = true;
  }

  // exact same concept as insert, but if it doesn't exist we immediately return null otherwise return
  // same thing as traverse, except we're going to check if the isWord is there at the end
  search(word) {
    let cur = this.root;
    for (let c of word) {
      if (!cur[c]) return false;
      else cur = cur[c];
    }
    return cur !== null && cur.isWord == true;
  }

  // almost same as search
  startsWith(prefix) {
    let cur = this.root;
    for (let c of prefix) {
      if (!cur[c]) return false;
      else cur = cur[c];
    }
    return true;
  }
}

// this is the other way when using Nodes, can be slightly more intuitive to understand

class TrieNode {
  constructor(val = null) {
    this.val = val; // don't actually need this
    this.children = [];
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let cur = this.root;
    for (let c of word) {
      if (!cur.children[c]) {
        cur.children[c] = new TrieNode(c);
      }
      cur = cur.children[c];
    }
    cur.isWord = true;
  }
  search(word) {
    let cur = this.root;
    for (let c of word) {
      if (!cur.children[c]) return false;
      cur = cur.children[c];
    }
    return cur.isWord;
  }
  startsWith(prefix) {
    let cur = this.root;
    for (let c of prefix) {
      if (!cur.children[c]) return false;
      cur = cur.children[c];
    }
    return true;
  }
}
