const a = "0";
const b = "0";

var addBinary = function (a, b) {
  let output = "";
  let carry = 0;
  if (a.length > b.length) {
    let length = a.length - b.length;
    let i = 0;
    while (i < length) {
      b = "0" + b;
      i++;
    }
  } else if (b.length > a.length) {
    let length = b.length - a.length;
    let i = 0;
    while (i < length) {
      a = "0" + a;
      i++;
    }
  }

  for (let i = a.length - 1; i > -1; i--) {
    let a1 = parseInt(a[i], 10);
    let b1 = parseInt(b[i], 10);

    let value = a1 + b1 + carry;
    if (value == 2) {
      value = 0;
      carry = 1;
    } else if (value == 3) {
      value = 1;
      carry = 1;
    } else {
      carry = 0;
    }
    output = value.toString() + output;
  }

  if (carry == 1) {
    output = carry + output;
  }

  return output;
};

console.log(addBinary(a, b));

// Here is a slightly more intuitive way where you have to reverse the strings so it's easier as you're itereating through the array

var addBinary = function (a, b) {
  let output = "";

  function reverseString(n) {
    let string = n.split("").reverse().join("");
    return string;
  }

  a = reverseString(a);
  b = reverseString(b);

  let carry = 0;

  let max_length = Math.max(a.length, b.length);

  for (let i = 0; i < max_length; i++) {
    if (i < a.length) {
      digitA = a[i];
    } else {
      digitA = 0;
    }

    if (i < b.length) {
      digitB = b[i];
    } else {
      digitB = 0;
    }

    let total = parseInt(digitA) + parseInt(digitB) + carry;
    let char = total % 2;
    if (total > 1) {
      carry = 1;
    } else {
      carry = 0;
    }
    output += char.toString();
  }

  if (carry > 0) {
    output += "1";
  }
  return reverseString(output);
};
