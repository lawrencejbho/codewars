/* 

More of a design problem than an algorithms but still popular 


*/

class Node(key,val) { 
    this.key = key
    this.val = val
    this.prev = null
    this.next = null
}


var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = {}

  this.left = new Node(0,0)
  this.right = new Node(0,0)
  // left is LRU, right is MRU
  this.left.next = this.right
  this.right.prev = this.left
};

LRUCache.prototype.get = function (key) {
  if(key in this.cache){ 
    this.remove(this.cache[key])
    this.insert(this.cache[key])
    return this.cache[key].val
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if(key in this.cache) { 
    this.remove(this.cache[key])
  }
  this.cache[key] = new Node(key,value)
  this.insert[this.cache[key]]

  if (this.cache.length > this.capacity) { 
    let lru = this.left.next 
    this.remove(lru)
    delete this.cache.lru
  }
};

// helper functions for our left and right

LRUCache.prototype.insert = function (node) {
    let prev = this.right.prev
    let next = this.right
    prev.next = node
    next.prev = node
    node.next = next 
    node.prev = prev 
}

LRUCache.prototype.remove = function (node) {
    let prev = node.prev
    let next = node.next
    prev.next = next 
    next.prev = prev
}