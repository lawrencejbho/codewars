/* 
Floyd's Cycle Detection - Linked List Cycle

Apparently this is one of those problems you would only be able to solve if you've seen it before.  Pretty sucky problem. 


Even though it's a linked list problem, we mostly solve it using some array manipulation.  The key note here is that the numbers in the array have corresponding indexes.  Therefore, in this problem
we can track what is happening in the array like it's a linked list.  So probably want to draw out what the cycle looks like.  The next part is we are going to run a slow and fast pointer through 
the entire cycle and it will eventually meet at some number.  Then we take an additional slow pointer and run it at the same time as the original slow pointer.  The point they meet up will always
be the duplicate so it's basically a proof.  

Through some math where 2 * slow = fast,   


*/

var findDuplicate = function (nums) {
  let fast = 0;
  let slow = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow == fast) {
      break;
    }
  }

  let second_slow = 0;
  while (true) {
    slow = nums[slow];
    second_slow = nums[second_slow];
    if (slow == second_slow) {
      return slow;
    }
  }
};

// this is me trying to solve it with a linked list.  But I'm having trouble with the last node that I create as I'm not sure how to assign the last .next
// this code keeps failing on the fast pointer as it's not going in a circle because the last node doesn't have a next
var findDuplicate = function (nums) {
  let node = new ListNode();
  let dummy = node;
  let current = node;

  for (let i = 0; i < nums.length; i++) {
    let newNode = new ListNode(nums[i]);
    current.next = newNode;
    current = newNode;
  }

  current = dummy.next;
  let fast = current;
  let slow = current;

  while (true) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      break;
    }
  }

  let second_slow = current;
  while (true) {
    slow = slow.next;
    second_slow = second_slow.next;
    if (slow == second_slow) {
      return slow.val;
    }
  }
};
