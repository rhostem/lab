'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var exec = require('child_process').exec;


gulp.task('js', function() {
  gulp.src([ global.paths.js.src ])
    .pipe(gulpif(argv.all === undefined, changed(global.paths.js.dist)))
    .pipe(eslint({
      fix: true
    }))
    .pipe(eslint.format())
    .pipe(gulpif(isFixed, gulp.dest(function(file) {
      // dest to same folder
      // overwrite original
      return file.base;
    })))
    .pipe(gulp.dest(global.paths.js.dist))
    .pipe(browserSync.reload({ stream: true }));
});

// watch gulp files
gulp.task('js-gulp', function() {
  gulp.src(global.paths.gulp)
    .pipe(eslint({
      fix: true
    }))
    .pipe(eslint.format())
    .pipe(gulpif(isFixed, gulp.dest(function(file) {
      // dest to same folder
      // overwrite original
      return file.base;
    })));
});

gulp.task('eslint', function() {
  exec('watch \'eslint --fix public/src/**/*.js\'');
});

/**
 * check if ESLint has fixed the file contents
 */
function isFixed(file) {
  return file.eslint != null && file.eslint.fixed;
}
