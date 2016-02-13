'use strict';

var gulp = require('gulp'),
  eslint = require('gulp-eslint'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

var config = {
  'browserSync': { // http://www.browsersync.io/docs/options/
    server: {
     baseDir: './src',
     directory:  true
    },
    port: 3300,
    notify: false,
    open: false,
    ghostMode: false,
  },
  js: {
    src: './src/js/**.js'
  },
  html: {
    src: ['./src/page/**/*.html', './src/index.html']
  }
}

// default task
gulp.task('default', ['js'], function() {

  browserSync(config.browserSync);
  gulp.watch(config.html.src, ['html']);
  gulp.watch([config.js.src], ['js']);

})

gulp.task('js', function() {
  gulp.src(config.js.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(reload({stream: true}));
})

gulp.task('html', function() {
  gulp.src(config.html.src)
    .pipe(reload({stream: true}));
})
