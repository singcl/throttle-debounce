var QUnit = require('qunitjs')
var throttle = require('../src/throttle')
var debounce = require('../src/debounce')

// throttle unit test cats.
var throttleDelayCallback = require('./throttle/delay-callback')
var throttleDelayFalseCallback = require('./throttle/delay-false-callback')
var throttleDelayTrueCallback = require('./throttle/delay-true-callback')

// debounce unit test case.
var debounceDelayCallback = require('./debounce/delay-callback')

QUnit.config.autostart = false

var pause = 500
var delay = 100

// 模拟高频率触发的动作
function execManyTimes(each, complete) {
    var i = 0
    var repeated
    var id

    function start() {
        id = setInterval(function() {
            each()
            if (++i === 50) {
                clearInterval(id)
                complete(repeated ? null : function() {
                    i = 0
                    repeated = true
                    setTimeout(start, pause)
                })
            }
        }, 20)
    }

    setTimeout(start, pause)
}

QUnit.module('throttle');

throttleDelayCallback(QUnit, throttle, delay, execManyTimes)
throttleDelayFalseCallback(QUnit, throttle, delay, execManyTimes)
throttleDelayTrueCallback(QUnit, throttle, delay, execManyTimes)

QUnit.module('debounce')

debounceDelayCallback(QUnit, debounce, delay, execManyTimes)