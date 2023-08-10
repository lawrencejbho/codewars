var canFinish = function (numCourses, prereq) {
  let map = new Map();

  for (let i = 0; i < prereq.length; i++) {
    if (!map.get(prereq[i][0])) {
      map.set(prereq[i][0], []);
    }
    map.get(prereq[i][0]).push(prereq[i][1]);
  }

  let set = new Set();

  function dfs(course) {
    if (set.has(course)) return false;
    if (map.get(course) == [] || !map.get(course)) return true;

    set.add(course);
    // console.log(map.get(course))
    for (let pre of map.get(course)) {
      if (!dfs(pre)) return false;
    }
    set.delete(course);
    map.set(course, []);
    return true;
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
};
