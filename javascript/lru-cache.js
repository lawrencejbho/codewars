/* 

More of a design problem than an algorithms but still asked a lot but maybe for senior positions.  The problem with this solution is that it sometimes will get time exceeded depending on leetcode.

Hash Map is to help us track if we've seen a number before and also set/get our Nodes in O(1).

DLL is so that we can figure out what is the LRU.  Dummy Head and Tail nodes are to make insert and find the LRU in our DLL.

*/

// create our own nodes for the doubly linked list nodes with prev and next
class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.prev = this.next = null;
  }
}

// Utilizing head and tail will make insertion and deletion easier in the future
class DoublyLinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
}

// Keep in mind that the insert will start at the head.  So that mean towards the tail is the LRU.
// this logic here is easy to see if you draw it out
DoublyLinkedList.prototype.insert = function (node) {
  node.prev = this.head;
  node.next = this.head.next;
  // this part is a little complicated but you have to do this because you can't utilize tail
  this.head.next.prev = node;
  this.head.next = node;
};
s;

// also has very confusing logic, but keep in mind that you can't use tail or next so this is the way to do it
DoublyLinkedList.prototype.remove = function (node) {
  let prev = node.prev;
  let next = node.next;
  prev.next = next;
  next.prev = prev;
};

// you don't need this function
DoublyLinkedList.prototype.moveToHead = function (node) {
  this.remove(node);
  this.insert(node);
};

// remove the right most element closest to tail (LRU) and return it's key
DoublyLinkedList.prototype.removeTail = function () {
  let tail = this.tail.prev;
  this.remove(tail);
  return tail.key;
};

// you don't need .length as you have size on the hashMap, but who knows if they let you use it
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hashMap = new Map();
    this.length = 0;
    this.dll = new DoublyLinkedList();
  }
}

// every time you get a node, you're removing it from wherever it is within the DLL and then reinserting it to the top
LRUCache.prototype.get = function (key) {
  let node = this.hashMap.get(key);
  if (node) {
    this.dll.remove(node);
    this.dll.insert(node);
    return node.val;
  }
  return -1;
};

// first check if node exists and also if we are at capacity.  If we're at capacity we need to grab the LRU and delete it then from our hash and then add a new node.
// When we add nodes, we will assign them to our hash with the (key, Node).  This makes it easy to get the node on the lookup so that we can pass it into our dll.

LRUCache.prototype.put = function (key, value) {
  let node = this.hashMap.get(key);
  if (node == null) {
    if (this.hashMap.size == this.capacity) {
      let lru = this.dll.removeTail();
      this.hashMap.delete(lru);
    }
    let newNode = new Node(key, value);
    this.hashMap.set(key, newNode);
    this.dll.insert(newNode);
  } else {
    node.val = value;
    this.dll.remove(node);
    this.dll.insert(node);
  }
};

// Practice
class Node {
  constructor(key, val) {
    this.val = val;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
}

DoublyLinkedList.prototype.insert = function (node) {
  node.next = this.head.next;
  node.prev = this.head;
  this.head.next.prev = node;
  this.head.next = node;
};

DoublyLinkedList.prototype.remove = function (node) {
  let prev = node.prev;
  let next = node.next;

  prev.next = next;
  next.prev = prev;
};

DoublyLinkedList.prototype.removeTail = function (node) {
  let tail = this.tail.prev;
  this.remove(tail);
  return tail.key;
};

class LRUCache {
  constructor(capacity) {
    this.hashMap = new Map();
    this.dll = new DoublyLinkedList();
    this.capacity = capacity;
  }
}

LRUCache.prototype.get = function (key) {
  let node = this.hashMap.get(key);
  if (node) {
    this.dll.remove(node);
    this.dll.insert(node);
    return node.val;
  }
  return -1;
};

LRUCache.prototype.put = function (key, val) {
  let node = this.hashMap.get(key);
  if (node == null) {
    if (this.hashMap.size == this.capacity) {
      let lru = this.dll.removeTail();
      this.hashMap.delete(lru);
    }
    let newNode = new Node(key, val);
    this.hashMap.set(key, newNode);
    this.dll.insert(newNode);
  } else {
    node.val = value;
    this.dll.remove(node);
    this.dll.insert(node);
  }
};
