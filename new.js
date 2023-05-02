function test(str1, str2) {
  let map = {};
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    if (map[str1[i]] == undefined) {
      console.log("hit");
      map[str1[i]] = 1;
    } else {
      map[str1[i]] += 1;
    }
  }

  console.log(map);

  for (let j = 0; j < str2.length; j++) {
    if (map[str2[j]]) {
      console.log("hit");
      map[str2[j]]--;
    } else {
      console.log(str2[j]);
      count++;
    }
  }

  for (let key in map) {
    count += map[key];
  }

  return count;
}

console.log(test("thought", "sloughs"));
