/* 

More of a design problem than an algorithms but still asked a lot.


*/

// create our own nodes for the doubly linked list nodes with prev and next
class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.prev = this.next = null;
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
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};

DoublyLinkedList.prototype.remove = function (node) {
  // console.log("trying to remove node:", node.key)
  let prev = node.prev;
  let next = node.next;
  prev.next = next;
  next.prev = prev;
};

// remove the tail element and return it's key
DoublyLinkedList.prototype.removeTail = function () {
  let tail = this.tail.prev;
  this.remove(tail);
  return tail.key;
};

// something very strange about using this.map - so renamed it to this.hashMap
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hashMap = new Map();
    this.length = 0;
    this.dll = new DoublyLinkedList();
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

LRUCache.prototype.put = function (key, value) {
  let node = this.hashMap.get(key);
  if (node == null) {
    let newNode = new Node(key, value);
    this.hashMap.set(key, newNode);
    this.dll.insert(newNode);
    this.length++;
    if (this.length > this.capacity) {
      let lru = this.dll.removeTail();
      this.hashMap.delete(lru);
      this.length--;
    }
  } else {
    node.val = value;
    this.dll.remove(node);
    this.dll.insert(node);
  }
};
