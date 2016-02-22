var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var bundle = require('gulp-bundle-assets');
var webserver = require('gulp-webserver');
var karma = require('karma');

const isTravis = process.env.TRAVIS || false;
const pathToKarmaConf = __dirname.replace('/gulp', '');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['serve']);

gulp.task('serve',['watch'],function(){
  gulp.src([
  	'./'
  	])
    .pipe(webserver({
      livereload: true,
      // directoryListing: true,
      // open: true,
      port: 8001
    }));
});

gulp.task('sass',function(done) {
  gulp.src(paths.sass)
    .pipe(sass({
      errLogToConsole: true
    }))
    //.pipe(gulp.dest('./css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./src/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch('./src/css/**/*.min.css',['bundle']);
});

gulp.task('bundle', function() {
  return gulp.src('./bundle.config.js')
    .pipe(bundle())
    .pipe(bundle.results('./')) // arg is destination of bundle.result.json
    .pipe(gulp.dest('./assets'));
});

gulp.task('install', function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('test', function(done){
  karma.server.start({
   configFile: pathToKarmaConf + '/karma.conf.js',
   singleRun: isTravis
 }, done);
});
