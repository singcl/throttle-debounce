/**
 * @desc Throttle execution of a function. Especially useful for rate limiting execution of handlers on events like resize and scroll.
 * 
 * @param {Number}      delay           delay in milliseconds
 * @param {Boolean}     noTrailing      Optional, defaults to undefined
 * @param {Function}    callback        A function to be executed after delay milliseconds
 * @param {Boolean}     debounceMode    If it is debounceMode
 * 
 * @returns {Function} closure. A callback wrapper HOC
 */
module.exports = function throttle(delay, noTrailing, callback, debounceMode) {
    // 
    var timeoutID

    var lastExec = 0

    if(typeof noTrailing === 'boolean') {
        debounceMode = callback
        callback = noTrailing
        noTrailing = undefined
    }

    function wrapper() {
        var self = this
        var elapsed = Number(new Date()) - lastExec
        var args = arguments

        function exec() {
            lastExec = Number(new Date())
            callback.apply(self, args)
        }

        function clear() {
            timeoutID = undefined
        }

        if(debounceMode && !timeoutID) {
            exec()
        }

        if(timeoutID) {
            clearTimeout(timeoutID)
        }

        if (debounceMode === undefined && elapsed > delay) {
            exec()
        } else if (noTrailing !== true) {
            timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay)
        }
    }

    return wrapper
}