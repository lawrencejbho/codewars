var TimeMap = function () {
  this.map = {};
};

TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map[key]) {
    this.map[key] = [];
  }
  this.map[key].push([value, timestamp]);
  //   const bucket = this.map[key] || [];

  //   this.map[key] = bucket;

  //   bucket.push([value, timestamp]);

  //   console.log(this.map[key]);
};

TimeMap.prototype.get = function (key, timestamp) {
  let result = "";
  let values = this.map[key] || [];

  console.log(values);

  let left = 0;
  let right = values.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    console.log(middle);
    console.log(values[middle][0]);
    console.log(values[middle][1]);
    if (values[middle][1] <= timestamp) {
      result = values[middle][0];
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

// console.log(myMap);
