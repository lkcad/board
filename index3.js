/*function throttle(func, wait) {
    var previous = 0;
    return function () {
        var now = +new Date();
        if (now - previous > wait) {
            func.apply(this, arguments);
            previous = now
        }
    }
}*/

/*function throttle(func, wait) {
    var timeFlag;
    return function () {
        if (!timeFlag) {
            timeFlag = setTimeout(() => {
                timeFlag = null;
                func.apply(this, arguments)
            }, wait)
        }
    }
}*/
/*const throttle = (func, wait) => {
    var timeout, context, args, result;
    var previous = 0;
    var later = function () {
        previous = +new Date();
        timeout = null;
        func.apply(context, args)
    };

    var throttled = function () {
        var now = +new Date();
        // 下次触发的剩余时间
        var remainging = wait - (now - previous);
        context = this;
        args = arguments;
        if (remainging < 0 || remainging > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args)
        } else if (!timeout) {
            timeout = setTimeout(later, remainging);
        }
    };
    return throttled
};*/

/*
function throttle(func, wait) {
    var timeout, context, args, result;
    var previous = 0;
    var later = function () {
        previous = +new Date();
        timeout = null;
        func.apply(context, args)
    };

    var throttled = function () {
        var now = +new Date();
        var remainging = wait - (now - previous);
        context = this;
        args = arguments;
        if (remainging < 0 || remainging > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args)
        } else if (!timeout) {
            timeout = setTimeout(later, remainging);
        }
    };
    return throttled
}
*/

function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous;
    if (!options) options = {};
    var later = function () {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) {
            context = args = null
        }
    };
    var throttled = function () {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining)
        }
    };
    return throttled
}


var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    container.innerHTML = count++;
    console.log(this, e);
    return 77777777777777777
};
container.onmousemove = throttle(getUserAction, 1000)

