const addFive = x => x + 5;
const multiplyThree = x => x * 3;
const compose = (...funcs) => {
    if (funcs.length === 0) {
        return arg => arg;
    }
    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...arg) => a(b(...arg)));
};
console.log(compose(multiplyThree, addFive)(3) === multiplyThree(addFive(3)));
