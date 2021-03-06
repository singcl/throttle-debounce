// Karma configuration
// Generated on Sun May 01 2016 16:50:20 GMT+0200 (CEST)

var path = require('path')

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // include browserify first in used frameworks.
        // karma-browserify usage @see https://github.com/nikku/karma-browserify
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['browserify', 'qunit'],


        // list of files / patterns to load in the browser
        files: [
            'test/**/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/**/*.js': ['browserify', 'coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            dir: path.join(__dirname, 'coverage'),
            reporters: [
                { type: 'html' },
                { type: 'lcov', subdir: 'lcov' }  // lcov
            ]
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // coverage reporter generates the coverage
        reporters: ['coverage', 'mocha'],

        // mocha reporter options
        mochaReporter: {
            colors: {
                // success: 'blue',
                // info: 'bgGreen',
                // warning: 'cyan',
                // error: 'bgRed'
            },
            symbols: {
                // success: '+',
                // info: '#',
                // warning: '!',
                // error: 'x'
            }
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        //   reporters: ['mocha'],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'Firefox'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
