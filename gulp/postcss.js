'use strict';

const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

// postcss processing
gulp.task('postcss', function() {
  gulp
    .src(global.paths.postcss.src)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('postcss-import')(),
      require('postcss-cssnext')({
        'browsers': ['last 2 versions', '> 1% in KR', 'ie 6-8', 'Firefox ESR'],
      }),
      require('precss')(),
      require('lost')(),
      require('postcss-sorting')({
        'sort-order': 'default',
        'empty-lines-between-children-rules': 0
      }),
      require('postcss-clearfix')(), // clear: fix
      require('postcss-reporter')({
        clearMessages: true
      }),
      require('postcss-browser-reporter')(),
      // require('stylelint')(),
    ]))
    .on('error', errorLog)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(global.paths.postcss.dist))
    .pipe(browserSync.reload({ stream: true }));
});


function errorLog(error) {
  console.error(error.message);
  this.emit('end'); // 에러 발생시 watch 멈추지 않게 한다
}


