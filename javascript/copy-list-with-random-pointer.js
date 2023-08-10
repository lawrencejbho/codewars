/* 
We have to use a Hash map versus an object here because we're storing objects and objects can only store integers, strings, symbols.

Take two passes on the original linked list, first pass stores to hash map.  Second pass handles the .next and .random


*/

var copyRandomList = function (head) {
  if (!head) return head; // this isn't needed either
  const oldToCopy = new Map();
  let current = head;

  while (current) {
    const copy = new ListNode(current.val);
    oldToCopy.set(current, copy);
    current = current.next;
  }

  current = head;

  // these nulls are important as we'll get issues when they point to null so can return null instead
  while (current) {
    const copy = oldToCopy.get(current);
    copy.next = oldToCopy.get(current.next) || null;
    copy.random = oldToCopy.get(current.random) || null; // this one isn't need to compile though
    current = current.next;
  }
  return oldToCopy.get(head);
};
