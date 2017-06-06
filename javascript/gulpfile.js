'use strict';

var path = require('path');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');

var conf = {
  paths: {
    src: 'src',
    dist: 'dist',
  },
  errorHandler: function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  },
};

/**
 *  Default task
 */
gulp.task('default', ['watch'], function () {
  gulp.start('serve');
});

/**
 * open local server for livereload
 */
gulp.task('serve', function() {
  browserSync.instance = browserSync.init({
    startPath: '/',
    server: {
      baseDir: './src',
      directory: true,
    },
    port: 4000,
    open: false,
  });
});

/**
 * watch source files
 */
gulp.task('watch', function () {
  gulp.watch([
      'src/**/*.html',
      'src/**/*.js'
    ], function () {
    browserSync.reload();
  });
});