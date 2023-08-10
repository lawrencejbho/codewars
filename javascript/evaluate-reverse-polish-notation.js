// this problem is pretty fun given that it's a stack, the key here is converting the expression to an operator that
// can be used later.  Not sure why we need Math.trunc here, but if I don't use it I get the wrong answer on some inputs
// in terms of the algo, we can push values into our stack.  whenever there is an math operator, we pop two values and
// apply the operator as the new Value.  We can then push this new Value into our stack and continue.  Complexity is O(n)
// as we only need to traverse the entire starting array once as our stack will continue to handle for us as we
// continue applying operators and push new Values.

const tokens = ["2", "1", "+", "3", "*"];
const tokens2 = ["4", "13", "5", "/", "+"];
const tokens3 = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];

var evalRPN = function (tokens) {
  const arr = [];

  // this is the magic
  const mathDefined = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => Math.trunc(x / y),
  };

  //   console.log(mathDefined["+"](2, 2));

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] < 200) {
      arr.push(tokens[i]);
    } else {
      const num2 = parseInt(arr.pop());
      const num1 = parseInt(arr.pop());
      //   console.log(num1);
      //   console.log(num2);
      let newVal = mathDefined[tokens[i]](num1, num2);
      //   console.log(newVal);
      arr.push(newVal);
    }
  }
  return arr.pop();
};

console.log(evalRPN(tokens3));
