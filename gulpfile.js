var gulp = require('gulp'),
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
