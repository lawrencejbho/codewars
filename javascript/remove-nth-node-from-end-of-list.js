/* 

2 pointer method, first for loop creates the distance of n between the two pointers.  Now use a while loop until we get right.next to equal null so that left will be one before the node it 
needs to remove.  Then we update the .next of this node to be .next.next.  

*/

var removeNthFromEnd = function (head, n) {
  let left = head;
  let right = head;

  for (let i = 0; i < n; i++) {
    right = right.next;
  }

  // this is for the edge case where n equals the amount of nodes.  In this case we will just return head.next as the head gets taken out
  if (!right) {
    return head.next;
  }

  while (right.next) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return head;
};

//* here is the same code but using a dummy instead.  Unnecessary for the problem but a good reference in case you need to do this in the future.

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head); // can initialize the new node with head as it's next like this
  let left = dummy;
  let right = head;

  for (let i = 0; i < n; i++) {
    right = right.next;
  }

  // this is for the edge case where n equals the amount of nodes.  In this case we will just return head.next as the head gets taken out
  if (!right) {
    return head.next;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return dummy.next;
};
