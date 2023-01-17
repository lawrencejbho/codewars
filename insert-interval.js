var insert = function (intervals, newInterval) {
  let output = [];

  if (intervals.length == 0) return [newInterval];

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      output.push(newInterval);
      return output.concat(intervals.slice(i, intervals.length));
    } else if (newInterval[0] > intervals[i][1]) {
      output.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1]),
      ];
    }
  }
  output.push(newInterval);

  return output;
};
