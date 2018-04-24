(function(window) {

    // unit test 1
    test('ok test', function() {
        ok(true, 'hello world');
    })

    // unit test 2
    QUnit.test( "hello test", function( assert ) {
        assert.ok( 1 === "1", "Passed!" );
    });
}(this))