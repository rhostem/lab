'use strict';

var gulp = require('gulp');

gulp.task('watch', ['html', 'js', 'jade', 'sass', 'postcss'], function() {
  gulp.watch([global.paths.js.src], ['js']);
  gulp.watch([global.paths.sass.src], ['sass']);
  gulp.watch([global.paths.jade.src], ['jade']);
  gulp.watch([global.paths.html.src], ['html']);
  gulp.watch([global.paths.css.src], ['postcss']);
  // gulp.watch([global.paths.css.src], ['css']);

});


gulp.task('watch-gulp', function() {
  gulp.watch(global.paths.gulp, ['js-gulp']);
});
