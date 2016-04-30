'use strict';

var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('build', ['buildjs']);

gulp.task('buildjs', function(cb) {
  // bundle study-react
  exec('jspm bundle build/**/*.js public/bundle-lab.js --inject --minify --skip-source-maps',
    function (err, stdout, stderr) {
      console.log(stdout);
    });
});

gulp.task('unbuildjs', function(cb) {
  exec('jspm unbundle', function (err, stdout, stderr) {
    console.log(stdout);
  });
});
