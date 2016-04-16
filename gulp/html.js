'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('html', function() {
  gulp.src(global.paths.html.src)
    .pipe( gulp.dest( global.paths.html.dist ) )
    .pipe( browserSync.reload({stream: true}));
});