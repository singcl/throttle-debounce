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

    // Timer`s ID
    // Ensure callback function execute at the proper time in throttle mode.
    // Ensure the rate is regular in throttle mode.
    var timeoutID

    // Record the last timeStamp that callback was executed.
    var lastExec = 0

    // noTrailing defaults to undefined
    // use throttle like this: throttle(500, callback)
    if(typeof noTrailing === 'boolean') {
        debounceMode = callback
        callback = noTrailing
        noTrailing = undefined
    }

    // core closure function. HOC function.
    // the wrapper function will limit the rate at which callback is executed
    function wrapper() {

        // init variables
        var self = this
        var elapsed = Number(new Date()) - lastExec
        var args = arguments

        // exec function that callback will be executed at last
        function exec() {
            // update the execution time
            lastExec = Number(new Date())
            callback.apply(self, args)
        }

        // 
        function clear() {
            timeoutID = undefined
        }

        if(debounceMode && !timeoutID) {
            exec()
        }

        // clear the timer. then we will create a new timer instead of this.
        if(timeoutID) {
            clearTimeout(timeoutID)
        }

        // throttle mode.
        // the elapsed time gap has more then delay
        if (debounceMode === undefined && elapsed > delay) {
            exec()
        } else if (noTrailing !== true) {
            // create a new timer instead of old.
            timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay)
        }
    }

    // return the closure HOC
    // the function will exec immediately when event has occur
    return wrapper
}