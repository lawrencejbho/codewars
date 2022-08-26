/*
In the bottom print of the problem it tells you that the timestamps are going to be in increasing order so we know to use binary search.  Overall it's a pretty normal binary search
problem from there just we need to check on the proper value in the objects which is in an array of an array.  

There is one trick in the binary search here and it's where we update our result whenever the value <= timestamp.  We do this because the number won't equal to the timestamp.  In normal
binary search you would have a separate if condition if the timestamp equals but we can't use that here.  

*/

// create object and give a map for key value pair
var TimeMap = function () {
  this.map = {};
};

// check if the key exists, if it doesn't then add an array.  Otherwise, just push the new value+timestamp as an array into the array
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map[key]) {
    this.map[key] = [];
  }
  this.map[key].push([value, timestamp]);
};

TimeMap.prototype.get = function (key, timestamp) {
  let result = "";
  let values = this.map[key] || [];

  //   console.log(values);

  let left = 0;
  let right = values.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    // console.log(middle);
    // console.log(values[middle][0]); // the value
    // console.log(values[middle][1]); // the timestamp
    if (values[middle][1] <= timestamp) {
      result = values[middle][0]; //* this is probably the most important line of the code
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return result;
};

const myMap = new TimeMap();
myMap.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1.
console.log(myMap.get("foo", 1)); // return "bar"
console.log(myMap.get("foo", 3)); // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
myMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
console.log(myMap.get("foo", 4)); // return "bar2"
console.log(myMap.get("foo", 5)); // return "bar2"
