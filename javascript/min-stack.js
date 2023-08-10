// just uses an array, the tough part is that we need to use an object to store the value
// and we can help us check for the min value every time we add in another value into our array
// was a bit confused how this worked without Nodes but it
// because the way that a stack works if lifo, we can store the min value on each value that is added
// so if we push in a 5 and then a 10, the 10's min is 5, if it gets popped, it's still left with a 5 underneath
// so the bottom's min is going 5, really good solution here

class Stack {
  constructor() {
    this.items = [];
  }

  push(val) {
    this.items.push({
      value: val,
      min: this.items.length === 0 ? val : Math.min(val, this.getMin()),
    });
  }
  pop() {
    return this.items.pop();
  }
  top() {
    return this.items[this.items.length - 1].value;
  }
  getMin() {
    return this.items[this.items.length - 1].min;
  }
}

// const stack = new Stack();
// stack.push(5);
// stack.push(10);
// stack.push(20);
// stack.pop();
// console.log(stack.top());
// console.log(stack.getMin());

var MinStack = function () {
  this.items = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.items.push({
    value: val,
    min: this.items.length === 0 ? val : Math.min(val, this.getMin()),
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.items.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.items[this.items.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// this is like a much more intuitive way of approaching this problem
// we use the min array to help us track the min as we go and can also push to it separately
// everytime we push we are going to check for the minimum and then push that into our min array
// everything else is super easy

class AnotherStack {
  constructor() {
    this.stack = [];
    this.min = [];
  }
  push(val) {
    if (this.stack.length == 0) {
      this.min.push(val);
    } else {
      let minimum = Math.min(val, this.min[this.min.length - 1]);
      this.min.push(minimum);
    }
    this.stack.push(val);
  }
  pop() {
    this.min.pop();
    return this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.min[this.min.length - 1];
  }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.pop();
console.log(myStack.top());
console.log(myStack.getMin());
