
module.exports = function(QUnit, debounce, delay, execManyTimes) {

    // test: debounce(delay, callback)
    QUnit.test('debounce(delay, callback)', function() {
        QUnit.expect(5);
        QUnit.stop();
    
        var startTime
        // var i = 0
        var arr = []
        var fn = function() {
            arr.push(+new Date())
        }
        var debounced = debounce(delay, fn)
    
        QUnit.equal(debounced.guid, fn.guid, 'debounced-callback and callback should have the same .guid')
    
        execManyTimes( function() {
            var now = +new Date()
            
            startTime = startTime || now
            // i++
            
            debounced.call()
        }, function(callback) {
            // var len = arr.length
            var doneTime = +new Date()
    
            setTimeout(function(){
                console.log(arr[0] - doneTime)
                QUnit.equal(arr.length, 1, 'callback was executed only once')
                QUnit.ok(arr[0] >= doneTime, 'callback should be executed after the finish. the D-value is about 100')
    
                startTime = null
                arr = []
                // i = 0
    
                callback ? callback() : QUnit.start()
    
            }, delay * 2)
        })
    })
}