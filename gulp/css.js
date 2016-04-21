
'use strict';

var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  sourcemaps = require('gulp-sourcemaps'),
  browserSync = require('browser-sync');

gulp.task('css', function() {
  gulp.src(global.paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require("stylelint")({ /* your options */ }),
      require('precss')({/* options */ }),
      require('autoprefixer')({
        'browsers': ['last 2 versions', '> 1% in KR', 'ie 6-8'],
      }),
      require('postcss-reporter')({ clearMessages: true })
    ]))
    .on('error', errorLog)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(global.paths.css.dist))
    .pipe( browserSync.reload({stream: true}) );
});


function errorLog(error) {
  console.error(error.message);
  this.emit('end'); // 에러 발생시 watch 멈추지 않게 한다
}