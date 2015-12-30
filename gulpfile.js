var gulp = require('gulp'),
	jade = require('gulp-jade'),
	browserSync = require('browser-sync'),
	reload      = browserSync.reload;

var config = {
	'browserSync': { // http://www.browsersync.io/docs/options/
		'server'  : [''],
		'port'    : 0077,
		'baseDir': "app",
    	'directory': true,
		'notify'  : !true,
		'browser' : 'chrome'
		// 'browser' : 'firefox'
	}
}

gulp.task('default', function () {
	browserSync(config.browserSync);
});

gulp.task('watch-jade', function() {
	gulp.watch(['test/**/*.jade'], ['jade']);
})

gulp.task('jade', function() {
	gulp.src('test/**/*.jade')
	.pipe( jade({'pretty': '\t'}) )
	.pipe( gulp.dest('test/dest') )
	.pipe( reload({stream: true}) );
});