var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    factor = require('factor-bundle');

gulp.task('browserify', function(){

    return browserify({
        entries: ['src/js/a.js', 'src/js/b.js']
    })
    .plugin(factor, {
        // File output order must match entry order
        o: ['bundle/a.js', 'bundle/b.js']
    })
    .bundle({
        debug: true
    })
    .pipe(source('common.js'))
    .pipe(gulp.dest('bundle/'));

});