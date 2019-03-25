const isArray = v => Array.isArray(v);
const getType = v => Object.prototype.toString.call(v);
const isObject = v => getType(v) === '[object Object]';
const isNaN = v => Number.isNaN(v);

const equalArray = (a, b) => a.length === b.length && !a.some((item, index) => !equal(item, b[index]));

const equalObject = (a, b) => (Object.keys(a).length === Object.keys(b).length) &&
    !Object.entries(a).some(([key, value]) => !equal(value, b[key]));

const equal = (a, b) => {
    if (getType(a) !== getType(b)) {
        return false;
    }
    if (isArray(a)) {
        return equalArray(a, b);
    }
    if (isObject(a)) {
        return equalObject(a, b);
    }
    if (isNaN(a) && isNaN(b)) {
        return true
    }
    return a === b;
};

var ans1 = equalObject({a: 1, b: 2}, {b: 2, a: 1});
var ans2 = equalArray([1, 2], [1, 2]);
var ans3 = equalArray([1, 2], [1, '2']);
var ans4 = equal({a: [1, '2'], b: 2}, {b: 2, a: [1, '2']});
var ans5 = equal([1, 2, {a: 1, b: 2}, 9], [1, 2, {b: 2, a: 1}, 9]);
var ans6 = equal([1, 2, {a: 1, b: 2}, 9], {a: [1, '2'], b: 2});
console.table([ans1, ans2, ans3, ans4, ans5, ans6]);
