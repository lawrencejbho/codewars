/* 

Use hash map to track what nodes you've been to and run checks.  Then consider edge cases.

could also use a hash set here and we don't need to use current, could just use head 

//* This can also be solved in linear time using a slow and fast pointer.  The fast pointer travels faster than the slow pointer and will eventually catch up to the slow pointer.  If that happens
//* return true.  Otherwise fast pointer gets to null and we return false.

*/

// original try
var hasCycle = function (head) {
  const map = new Map();
  let current = head;

  while (current) {
    if (map.get(current) == 0) {
      return true;
    } else {
      map.set(current, 0);
      current = current.next;
    }
  }

  return false;
};

// uses a set and is more condensed

var hasCycle = function (head) {
  const map = new Set();

  while (head) {
    if (map.has(head)) {
      return true;
    } else {
      map.add(head);
      head = head.next;
    }
  }

  return false;
};

//* floyds tortoise and hare, slow and fast pointer style

var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      return true;
    }
  }
  return false;
};

var hasCycle = function (head) {
  let map = new Map();
  let node = head;

  while (true) {
    if (!node) return false;

    if (map.has(node.next)) {
      return true;
    } else {
      map.set(node.next, node);
    }
    node = node.next;
  }
};
