let arrays = [[1, 2, 3], [4, 5], [6]];
let flatten = [];
console.log(arrays.reduce(function(level, val) {
   flatten = level.concat(val);
  return flatten;
}))