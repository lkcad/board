var array = [1, 2, [3, 2], 3, [2, 4, 5, 2, [3, 4, 5]], 4, 5, 6, 7];

const flatten = x => x.reduce((pre, cur) => Array.isArray(cur) ? cur.concat(flatten(cur)) : cur.concat(cur), []);


// return Array.isArray(cur) ? cur.concat(flatten(cur)) : cur.concat(cur)


console.log(flatten(array));
