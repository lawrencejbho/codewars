const num = 100;

function fizzBuzz(num) {
  for (let i = 1; i < num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(num));

function fizzBuzz(num) {
  for (let i = 1; i < num; i++) {
    let out = "";
    if (i % 3 == 0) {
      out += "Fizz";
    }
    if (i % 5 == 0) {
      out += "Buzz";
    }
    if (i % 7 == 0) {
      out += "Bazz";
    }
    console.log(out || i);
  }
}
