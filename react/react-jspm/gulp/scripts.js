'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');
var exec = require('child_process').exec;
var $ = require('gulp-load-plugins')();


gulp.task('scripts-reload', function() {
  return buildScripts()
    // .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return buildScripts();
});

gulp.task('eslint', function() {
  exec('node_modules/.bin/esw -w --fix --cache public/components/**/*.js', conf.execCb);
});

function buildScripts() {
  return gulp.src([
      path.join(conf.paths.src, '/app/**/*.js'),
    ])
    // .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.size())
};
