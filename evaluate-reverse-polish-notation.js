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
      let num2 = parseInt(arr.pop());
      let num1 = parseInt(arr.pop());
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
