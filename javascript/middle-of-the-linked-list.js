var middleNode = function (head) {
  let slow = head.next;

  if (slow == undefined) return head;
  let fast = head.next?.next;

  if (fast == undefined) return slow;

  while (true) {
    if (fast.next == undefined) {
      return slow;
    } else if (fast.next.next == undefined) {
      return slow.next;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return head;
};
