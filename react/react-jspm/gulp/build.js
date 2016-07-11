'use strict';

var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');
var exec = require('child_process').exec;


var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'uglify-save-license', 'del']
});

gulp.task('unbundle', function() {
  exec('jspm unbundle', conf.execCb);
});

/**
 * 배포용 번들 생성
 */
gulp.task('bundle', function() {
  exec('jspm bundle app/app --minify --inject --skip-source-maps', conf.execCb);
});

gulp.task('clean', function() {
  $.del([
    'dist',
    'public/index.html',
    'public/app.css',
    // 'public/build.js',
    'public/maps/'
  ]);
});


gulp.task('html', ['inject'], function () {
  var jsFilter = $.filter('**/*.js', { restore: true });
  var cssFilter = $.filter('**/*.css', { restore: true });

  return gulp.src(path.join(conf.paths.src, 'index.html'))
    .pipe($.useref())
    .pipe(jsFilter)
    .pipe($.sourcemaps.init())
    .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
    .pipe($.rev())
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe($.cssnano({ safe: true }))
    .pipe($.rev())
    .pipe(cssFilter.restore)
    .pipe($.revReplace())
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }));
  });

/**
 * JSPM bundle 후에 config.js build.js 파일을 dist 폴더로 옮긴다.
 */
gulp.task('systemjs', function() {
  gulp.src([
    'public/config.js',
    'public/build.js'
    ])
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});

/**
 * 폰트, html, css, js 파일을 제외한 파일을 dist 폴더로 이동시킨다.
 */
gulp.task('assets', function () {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join('!' + conf.paths.src, '/jspm_packages/**/*'),
    path.join('!' + conf.paths.src, '/vendor/**/*'),
    path.join('!' + conf.paths.src, '/**/*.{html,css,js,map}'),
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});


gulp.task('build', ['clean', 'bundle', 'html', 'assets'], function () {
  gulp.src([
    'public/config.js',
    'public/build.js'
    ])
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});


