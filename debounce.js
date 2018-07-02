/* eslint-disable no-undefined */

var throttle = require('./throttle')

/**
 * Debounce execution of a function, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         delay in milliseconds for event callbacks,
 * @param  {Boolean}  atBegin       Optional, defaults to false. 
 * If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 * after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 * @param  {Function} callback      A function to be executed after delay milliseconds
 *
 * @return {Function} closure. A callback wrapper HOC
 */
module.exports = function(delay, atBegin, callback) {
    return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
};
