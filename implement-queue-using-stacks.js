var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
  let len = this.stack1.length - 1;
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop());
  }
  let res = this.stack2.pop();
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  return res;
};

MyQueue.prototype.peek = function () {
  return this.stack1[0];
};

MyQueue.prototype.empty = function () {
  if (this.stack1.length === 0) return true;
  return false;
};
