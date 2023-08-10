/*
https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript

Write a generic function chainer
Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90;
*/

/* 4/28/2022
I wrote out the proper answer, but basically it's going to use the reduce function and from there it's about knowing that you can apply each function in the array
and it'll store the result in previousValue so that you can run it again in the nextFunction.  The first previousValue gets pulled from value and then we start reducing.  
*/

function chain(value, functions) {
    // return functions.reduce(function(previousValue, nextFunction) { return nextFunction(previousValue) }, value);
    return functions.reduce((previousValue,nextFunction) => nextFunction(previousValue), value)
  }

function add(num) {
    return num + 10;
  }
  
  function mult(num) {
    return num * 30;
  }

  function subtract(num) {
      return num - 100; 
  }
  

console.log(chain(.05, [add, mult, subtract]))