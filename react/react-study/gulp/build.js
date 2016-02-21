'use strict';

var gulp = require('gulp');
var jspm = require('gulp-jspm');
var rename = require('gulp-rename');
var exec = require('child_process').exec;
var replace = require('gulp-replace');

gulp.task('buildjs', function(cb) {
  exec('jspm bundle js/**/* --inject --minify',function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('unbuildjs', function(cb) {
  exec('jspm unbundle',function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});



// // Build JS for distribution.
// gulp.task('buildjs', function () {
//   gulp.src('./public/js/**/*')
//     .pipe(jspm({
//       selfExecutingBundle: false,
//       minify: true,
//       skipSourceMaps: false
//     }))
//     .pipe(rename('build.js'))
//     .pipe(gulp.dest('public'));
// });

// Build HTML for distribution.
gulp.task('buildhtml', function () {
  gulp.src('public/index.html')
    // .pipe(replace('css/app.css', 'app.min.css'))
    // .pipe(replace('lib/system.js', 'app.min.js'))
    // .pipe(replace('<script src="config.js"></script>', ''))
    // .pipe(replace('System.import', 'System.import(\'build.js\');System.import'))
    // .pipe(htmlMin({collapseWhitespace: true}))
    // .pipe(gulp.dest('public'));
});
