// s = "()[]{}";
// s = "({[]})";
// s = "([)]";
// s = "()";
// s = "(){}}{";
// s = "((((((({[})))))))";

// kind of inefficent way of doing it but I wasn't sure how to consider both scenarios

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

console.log(valid(s));
