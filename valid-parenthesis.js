// first only adds to the array if we get a right facing parenthesis
// otherwise check if the character is going to match up with our map
// I'm not sure how it knows in this step if we get some weird our of character but it's hard to picture without going through it
// same thing here where it will remove everything from stack if it matches up
// checks for array to be empty as the return condition

function betterSolution(s) {
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      arr.push(s[i]);
    } else {
      if (arr[arr.length - 1] === map[s[i]]) {
        arr.pop();
      } else return false;
    }
  }
  return arr.length === 0 ? true : false;
}

console.log(betterSolution(s));
