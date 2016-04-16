'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');

global.paths = {
  js: {
    src: 'public/src/**/*.js',
    dist: 'public',
  },
  sass: {
    src: ['public/src/**/*.sass', 'public/src/**/*.scss'],
    dist: 'public/',
  },
  jade: {
    src: ['public/src/**/*.jade', '!public/src/**/part/**/*.jade'],
    dist: 'public'
  },
  html: {
    src: 'public/src/**/*.html',
    dist: 'public'
  },
  gulp: 'gulp/*.js',
  build: 'dist',
}

global.gulpConfig = {};

requireDir('./gulp', { recurse: false } );

gulp.task('default', ['bs', 'watch', 'unbuildjs']);
