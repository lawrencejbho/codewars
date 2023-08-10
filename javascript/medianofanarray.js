/*
this is something that was talked about in week 4 of the algorithms class
the way they did it was using a pivot and then comparing each side and recursing 

I figure that most will just use the sort method in javascript though
*/

array = [5, 7, 0, 5, 4, 1, 9, 8, 4, 30];

// you need to use this notation for some reason or it messes up on the 30
array.sort((a, b) => a - b);

middle = Math.floor((array.length - 1) / 2);

console.log(array[middle]);
