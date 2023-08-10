/*

first we're able to divide the list by two by using a fast and slow pointer.  Fast pointer increases by two (next.next)
Slow pointer increase by one.

Next, now that we found that second half of the list, we need to reverse it.  This should be the same logic as the easy
problem.  

Now we can merge the two together as we have the heads of the two lists.  Save them to variables and we're also going
to need to save their .next because we are going to sever the links and then put them back.

*/

var reorderList = function (head) {
  if (!head) {
    return;
  }

  // first divide the list by using two pointers, your slow will be the head of the second list

  let slow = head;
  let fast = head;

  // I think we need the fast && fast.next here because we jump two everytime
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half

  let current = slow;
  let previous = null;

  while (current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  let first = head;
  let second = previous; // not sure why it's not current

  // combine two lists by saving their .nexts and pointing first -> second-> first -> second
  while (second.next) {
    tmp1 = first.next;
    tmp2 = second.next;
    first.next = second;
    first = tmp1;
    second.next = first;
    second = tmp2;
  }
};
