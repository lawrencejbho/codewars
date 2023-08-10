const values = [1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 5, 7];

function unique(values) {
  let anchor = 0;
  let floater = 0;
  let counter = 0;

  while (floater <= values.length) {
    if (values[floater] == values[anchor]) {
      floater++;
    } else {
      anchor = floater;
      counter++;
    }
  }
  return counter;
}

console.log(unique(values));
