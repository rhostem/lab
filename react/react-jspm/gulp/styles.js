'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

gulp.task('styles-reload', ['stylelint'], function() {
  return buildStyles()
    .pipe(browserSync.stream());
});

gulp.task('styles', ['stylelint'], function() {
  return buildStyles();
});

var buildStyles = function() {
  /**
   * app.css에서 import 해야하는 파일들을 자동으로 추가
   */
  var injectFiles = gulp.src([
    // path.join(conf.paths.src, '/styles/**/*.css'), // 순서를 위해 먼저 지정
    path.join(conf.paths.src, '/app/**/*.css'),
  ], { read: false });

  var injectOptions = {
    transform: function(filePath) {
      // console.log('filePath = ' + filePath);
      filePath = filePath.replace('public/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '/* injector */',
    endtag: '/* endinjector */',
    addRootSlash: false
  };

  /**
   * postcss 프로세서 목록
   */
  var postcssProcessors = [

    require('postcss-import')(),
    require('postcss-browser-reporter')(),
    require('precss')(),
    require('postcss-cssnext')({
      'browsers': ['last 2 versions', '> 1% in KR', 'ie 6-8', 'Firefox ESR'],
    }),
    require('postcss-advanced-variables')(),
    require('lost'),
    require('postcss-clearfix')(),
  ];

  return gulp.src([
    path.join(conf.paths.src, '/inject.app.css')
  ])
    .pipe($.rename('app.css'))
    .pipe($.inject(injectFiles, injectOptions))
    .pipe($.sourcemaps.init())
    .pipe($.postcss(postcssProcessors))
    .on('error', conf.errorHandler('postcss'))
    .pipe($.sourcemaps.write('./maps'))
    .pipe(gulp.dest(conf.paths.src));
    // .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/')));
};

gulp.task('stylelint', function() {
  return gulp.src([
    // path.join(conf.paths.src, '/styles/**/*.css'),
    path.join(conf.paths.src, '/app/**/*.css'),
  ])
  .pipe($.postcss([
    require('stylelint')(),
    require('postcss-reporter')({ clearMessages: true })
    ]));
});
