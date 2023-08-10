function findOrder(numCourses, prereqs) {
  let res = [];
  let map = new Map();

  for (let i = 0; i < prereqs.length; i++) {
    if (!map.get(prereqs[i][0])) {
      map.set(prereqs[i][0], []);
    }
    map.get(prereqs[i][0]).push(prereqs[i][1]);
  }

  console.log(map);

  let visit = new Set();
  let cycle = new Set();

  function dfs(course) {
    if (cycle.has(course)) return false;
    if (visit.has(course)) return true;
    if (!map.get(course)) {
      visit.add(course);
      res.push(course);
      return true;
    }

    cycle.add(course);
    for (let pre of map.get(course)) {
      if (!dfs(pre)) return false;
    }
    cycle.delete(course);
    visit.add(course);
    res.push(course);
    return true;
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }
  return res;
}

// same solution, but doesn't use a visit set and just modifies the original map, this solution is more similar to Course Scheduler 1

var findOrder = function (numCourses, prereq) {
  let res = [];
  let map = new Map();

  for (let i = 0; i < prereq.length; i++) {
    if (!map.has(prereq[i][0])) {
      map.set(prereq[i][0], []);
    }
    map.get(prereq[i][0]).push(prereq[i][1]);
  }
  //   console.log(map)

  let cycle = new Set();

  function dfs(course) {
    if (cycle.has(course)) return false;
    if (map.get(course) == -1) {
      return true;
    }
    if (!map.get(course)) {
      map.set(course, -1);
      res.push(course);
      return true;
    }

    cycle.add(course);
    for (let pre of map.get(course)) {
      if (!dfs(pre)) return [];
    }
    cycle.delete(course);
    map.set(course, -1);
    res.push(course);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }
  return res;
};
