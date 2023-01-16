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
    console.log(value);
    output = value.toString() + output;
    console.log(output);
  }

  console.log(carry);

  if (carry == 1) {
    output = carry + output;
  }

  return output;
};

console.log(addBinary(a, b));
