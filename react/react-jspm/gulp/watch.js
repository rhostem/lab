'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var exec = require('child_process').exec;
var browserSync = require('browser-sync');

/**
 * check event type is not added, deleted, renamed
 *
 * @param  {[Object]}  event [event.type, event.path]
 * @return {Boolean}
 */
function isOnlyChange(event) {
  return event.type === 'changed';
}

/**
 * system.js에서 xhr을 이용해 동적으로 모듈을 로드하면 시간이 많이 소요된다.
 * watch task를 시작하기 전에 dependency가 걸린 모듈들을 묶어서 로딩 시간을 단축시킨다.
 */
gulp.task('dependency-bundle', ['unbundle'], function() {
  exec('jspm bundle app/**/* + systemjs-hot-reloader - [app/**/*] public/dependency-bundle.js --inject', conf.execCb);
});


gulp.task('watch', ['dependency-bundle', 'inject'], function () {
// gulp.task('watch', ['inject'], function () {

  gulp.watch([
    path.join(conf.paths.src, '/*.html'),
  ], ['inject-reload']);

  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.css'),
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch([
      path.join(conf.paths.src, '/app/**/*.js'),
    ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch([
    path.join(conf.paths.src, '/*.html'),
    ], function(event) {
    browserSync.reload(event.path);
  });
});
