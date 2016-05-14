'use strict';

const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

// postcss processing
gulp.task('css', function() {
  gulp.src(global.paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('stylelint')(),
      require('precss')(),
      // to use @import
      require('postcss-partial-import')(),
      // add vendor prefix
      require('autoprefixer')({
        'browsers': ['last 2 versions', '> 1% in KR', 'ie 6-8', 'Firefox ESR'],
      }),
      require('postcss-sorting')({
        'sort-order': 'default',
        'empty-lines-between-children-rules': 0
      }),
      // clear: fix
      require('postcss-clearfix')(),
      require('postcss-reporter')({
        clearMessages: true
      })
    ]))
    .on('error', errorLog)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(global.paths.css.dist))
    .pipe(browserSync.reload({ stream: true }));
});


function errorLog(error) {
  console.error(error.message);
  this.emit('end'); // 에러 발생시 watch 멈추지 않게 한다
}


