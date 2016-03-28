'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('html', function() {
  gulp.src(global.paths.html.src)
    .pipe( browserSync.reload({stream: true}));
});