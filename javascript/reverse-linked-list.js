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

  // had to add in some additional changes to the head and tail to get this to work in my local environment
  // the solutions that I found are without a this.tail

  // basically we want to save our nodes as previous, current, and Next
  // we then update each as we traverse through our linked list until we get to the end which is null
  // keep in mind leetcode answers won't use a this component but you need to type that out here

  reverseList() {
    let previous = null;
    let current = this.head;
    let nextNode;

    // these two lines are to get it look properly when compiling here but not needed for leetcode answer
    this.head = this.tail;
    this.tail = current;

    while (current !== null) {
      nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
    return previous;
  }
}

let list = new SinglyLinkedList();

list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.reverseList();
console.log(list);
