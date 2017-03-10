// Karma configuration
// Generated on Tue Mar 07 2017 15:57:15 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','browserify'],




    // list of files / patterns to load in the browser
    files: [
    'App/addition.js',
    //'jasmin/lib/jasmine-2.5.2/*.js',
    'jasmin/spec/UnitTest.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

           'jasmin/spec/UnitTest.js' :['coverage'],
	   'App/*.js' : ['babel']

    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress' , 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


 coverageReporter: {
     // type:   'lcov',
     // type : 'html',
      dir : 'coverage/',
	reporters: [
                        { type: 'html', subdir: 'report-html' },
			{ type: 'lcov', subdir: 'report-lcov' },
			// reporters supporting the `file` property, use `subdir` to directly 
			// output them in the `dir` directory 
			{ type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
			{ type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
			{ type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
			{ type: 'text', subdir: '.', file: 'text.txt' },
			{ type: 'text-summary', subdir: '.', file: 'text-summary.txt' }
	]

    }

  })
}
