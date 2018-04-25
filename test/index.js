var qunit = require('qunitjs')

var throttle = require('../src/throttle')

// Qunit.config.autostart = false

var pause = 500
var delay = 100

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

qunit.module('throttle')

qunit.test('dealy callback', function() {
    qunit.expect(7)
    qunit.stop()
})

