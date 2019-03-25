const deBounce = (func, wait, immediate) => {
    let timeFlag;
    const deBounced = (...args) => {
        clearInterval(timeFlag);
        if (immediate) {
            const oldFlag = !timeFlag;
            timeFlag = setTimeout(() => {
                timeFlag = null
            }, wait);
            oldFlag && func.apply(this, args)
        } else {
            timeFlag = setTimeout(func.bind(this, ...args), wait)
        }
    };
    deBounced.cancel = () => {
        clearTimeout(timeFlag);
        timeFlag = null;
    };
    return deBounced
};
/*
function deBounce(func, wait, immediate) {
    var timeFlag;
    var deBounced = function () {
        var context = this;
        var args = arguments;
        var result;
        timeFlag && clearInterval(timeFlag);
        if (immediate) {
            var callNow = !timeFlag;
            timeFlag = setTimeout(function () {
                timeFlag = null
            }, wait);
            if (callNow) result = func.apply(context, args)
        } else {
            timeFlag = setTimeout(function () {
                func.apply(context, args)
            }, wait)

        }
        return result
    };
    deBounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };
    return deBounced;
}*/

var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    container.innerHTML = count++;
    console.log(this, e);
    return 77777777777777777
};

// container.onmousemove = getUserAction;
const a = deBounce(getUserAction, 1000, true);
container.onmousemove = a;
container.onmouseout = ()=>{
    a.cancel()
};
