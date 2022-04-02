/**
 * @param {Function} func
 * @param {number} wait
 * @param {IOptions} options
 * @return {*}
 * @Date: 2022-04-02 10:57:20
 */
function throttle(func, wait, options) {
    let timeout = null, context = null, args = null; // result
    let previous = 0;
    if (!options)
        options = {
            leading: true,
            trailing: true,
        };
    const later = function () {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout)
            context = args = null;
    };
    const throttled = function () {
        const now = new Date().getTime();
        if (!previous && options.leading === false)
            previous = now;
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout)
                context = args = null;
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };
    throttled.cancel = () => {
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    };
    return throttled;
}

export { throttle as default };
