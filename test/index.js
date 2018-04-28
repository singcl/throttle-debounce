var QUnit = require('qunitjs')
var throttle = require('../src/throttle')

// throttle unit test cats.
var delayCallback = require('./throttle/delay-callback')
var delayFalseCallback = require('./throttle/delay-false-callback')
var delayTrueCallback = require('./throttle/delay-true-callback')

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

delayCallback(QUnit, throttle, delay, execManyTimes)
delayFalseCallback(QUnit, throttle, delay, execManyTimes)
delayTrueCallback(QUnit, throttle, delay, execManyTimes)
