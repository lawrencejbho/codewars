class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

// first create a blank node and then assign it to a variable so we can use it for later
// we go through each list checking for which node is greater, assign that as the next for our new list,
// also need to update our current to point to the new node after assigning it as the next, then use the next on the original list
function mergeTwoLists(l1, l2) {
  let current = new Node();
  const dummy = current;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      current = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      current = l2;
      l2 = l2.next;
    }
  }

  // this part I'm not sure about, once we get to null we assign the rest of the list
  // but not sure what happens if we have multiple values left in the remaining list
  if (!l1) current.next = l2;
  if (!l2) current.next = l1;
  return dummy.next;
}

// a very very subtle difference between the two here where we put the current = current.next outside of the comparisons
// for some reason this is much slower than the other answer
function mergeTwoLists2(l1, l2) {
  let current = new Node();
  const dummy = current;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  if (!l1) current.next = l2;
  if (!l2) current.next = l1;
  return dummy.next;
}

let list1 = new SinglyLinkedList();
let list2 = new SinglyLinkedList();

list1.push(1);
list1.push(2);
list1.push(4);

list2.push(1);
list2.push(3);
list2.push(4);

console.log(mergeTwoLists(list1, list2));
