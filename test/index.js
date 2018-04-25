var qunit = require('qunitjs')
var throttle = require('../src/throttle')

QUnit.config.autostart = false

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

qunit.module('throttle');

qunit.test('delay, callback', function() {
	qunit.expect(7);
	qunit.stop();

	var startTime
	var i = 0
	var arr = []
	var fn = function(now) {
			arr.push(now - this)
		}
	var throttled = throttle(delay, fn)

	qunit.equal(throttled.guid, fn.guid, 'throttled-callback and callback should have the same .guid');

	execManyTimes( function() {
        var now = +new Date()
        
		startTime = startTime || now
        i++
        
		throttled.call(startTime, now)
	}, function(callback) {
		var len = arr.length

		setTimeout(function(){
			//console.log( arr, arr.length, len, i );
			qunit.ok(arr.length < i, 'callback should be executed less # of times than throttled-callback');
			qunit.equal(arr[0], 0, 'callback should be executed immediately');
			qunit.equal(arr.length - len, 1, 'callback should be executed one more time after finish');

			startTime = null
			arr = []
			i = 0

			callback ? callback() : qunit.start()

		}, delay * 2)
	})
})