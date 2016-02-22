// Karma configuration
// Generated on Sun Feb 21 2016 00:33:59 GMT-0500 (ECT)
var isDebug = process.env.DEBUG || false;
var isTravis = process.env.TRAVIS || false;
var browsers = isTravis ? [ 'PhantomJS' ] : [isDebug ? 'Chrome' : 'PhantomJS2'];
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'libs/angular/angular.js',
      'libs/angular-ui-router/release/angular-ui-router.min.js',
      'libs/angular-material/angular-material.min.js',
      'libs/angular-animate/angular-animate.min.js',
      'libs/angular-aria/angular-aria.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      './src/**/*.js',
      './tests/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    plugins: [
      //require('karma-webpack'),
      'karma-phantomjs2-launcher',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine',
      // 'karma-ng-html2js-preprocessor',
      // 'karma-html-reporter',
      // 'karma-spec-reporter',
      //'karma-mocha-reporter',
      //'karma-json-fixtures-preprocessor'
      // 'karma-babel-preprocessor'
      // 'karma-browserstack-launcher'
      // 'karma-coverage'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [
      //'spec',
      //'mocha'
      'progress'
    ],

    mochaReporter: {
     // output: 'autowatch'
    },
    // web server port
    //port: 9876,


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
    //concurrency: Infinity
  })
}
