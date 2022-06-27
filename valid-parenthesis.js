// s = "()[]{}";
// s = "({[]})";
s = "([)]";
// s = "()";
// s = "(){}}{";
// s = "((((((({[})))))))";

// kind of inefficent way of doing it but I wasn't sure how to consider both scenarios
// i first tackled the first possibility of getting somethign like {}
// everytime it sees this it will remove the last entry in the array
// I then considered the other use case of when we have a {()}, after the unshifting it will check for it because
// it will see a flip in the stack of like { } so it knows to remove both of them

// also this should be using push and pop instead of shift and unshift which will make the time complexity really bad

function valid(s) {
  let array = [s[0]];

  if (s.length % 2 == 1) {
    return false;
  }

  for (let i = 1; i < s.length; i++) {
    if (array[0] == "(" && s[i] == ")") {
      array.shift();
    } else if (array[0] == "{" && s[i] == "}") {
      array.shift();
    } else if (array[0] == "[" && s[i] == "]") {
      array.shift();
    } else if (array[0] == ")" && array[1] == "(") {
      array.shift();
      array.shift();
    } else if (array[0] == "}" && array[1] == "{") {
      array.shift();
      array.shift();
    } else if (array[0] == "]" && array[1] == "[") {
      array.shift();
      array.shift();
    } else {
      array.unshift(s[i]);
    }
  }
  if (array.length !== 0) {
    return false;
  }
  return true;
}

// console.log(valid(s));

// kind of similar to what I was thinking but it combines everything together
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
