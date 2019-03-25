function f1(a) {
    // console.log('f1', a)
    return function (f1) {
        console.log('f11111111111111111111111',f1)
        f1()
    }
}

function f2(a) {
    // console.log('f2', a)
    return function (f1) {
        console.log('f22',f1)
        f1()
    }
}

function ccc(kk) {
    // console.log('ccc', kk)
    return function (k) {
        console.log('ccc2222222222222222222222222222222',k)
    }
}

const compose = (...funcs) => {
    if (funcs.length === 0) {
        return arg => arg;
    }
    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...arg) => a(b(...arg)));
};

const ff=compose(f1,f2)(ccc)
console.log(ff('99999999888888888888'))
