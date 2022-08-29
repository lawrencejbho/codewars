/*
First create a dummy node for the new Linked List that we're creating.  We are going to traverse both lists at the same time and then create the new Linked List with the added values.  
The carry is very important because we need to add that remainder or potentially create a new node if there is a carry.  The math for carry should make sense.  The math for val should
also make sense.  

Once we have the new value, create the new Node for our linked list and assign it as our current.next.  Update where we are in l1 and l2.  Also, keep in mind that l1 and l2 may be different lengths
so in this case, I used a ternary to just make it null if that happens. 


*/

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;

  let carry = 0;

  // there is also an or for the carry in the case where we have a carry and need to create another Node at the end
  while (l1 || l2 || carry) {
    v1 = l1 ? l1.val : 0;
    v2 = l2 ? l2.val : 0;

    val = v1 + v2 + carry;
    carry = Math.floor(val / 10);
    val = val % 10;
    current.next = new ListNode(val);
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
}

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    let value1 = l1 ? l1.val : 0;
    let value2 = l2 ? l2.val : 0;

    let total = value1 + value2 + carry;
    carry = Math.floor(total / 10);
    total = total % 10;

    let node = new ListNode(total);
    current.next = node;
    current = current.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
}
