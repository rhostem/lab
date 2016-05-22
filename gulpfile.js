'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');

global.paths = {
  js: {
    src: 'public/src/**/*.js',
    dist: 'public/dist/',
  },
  sass: {
    src: ['public/src/**/*.sass', 'public/src/**/*.scss'],
    dist: 'public/dist',
  },
  jade: {
    src: ['public/src/**/!(_)*.jade'],
    dist: 'public/dist/'
  },
  html: {
    src: 'public/src/**/*.html',
    dist: 'public/dist/'
  },
  css: {
    // src: ['public/src/**/!(_)*.css'],
    src: ['public/src/**/*.css'],
    dist: 'public/dist/'
  },
  postcss: {
    src: ['public/src/**/style*.css'],
    dist: 'public/dist/'
  },
  gulp: 'gulp/*.js',
  build: 'dist',
};

global.gulpConfig = {};

requireDir('./gulp', { recurse: false });

gulp.task('default', ['bs', 'watch', 'unbuildjs']);
