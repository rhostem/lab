'use strict'

var path = require('path')
var gulp = require('gulp')
var browserSync = require('browser-sync')
var gutil = require('gulp-util')
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');

var conf = {
  paths: {
    src: './src',
    dist: './dist',
    sass: {
      src: './src/sass/*.scss',
      dist: './src/css'
    },
    pug: {
      src: './src/pug/*.pug',
      dist: './src'
    }
  },
  errorHandler: function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString())
      this.emit('end')
    }
  },
  sass: {
    process: {
      errLogToConsole: true,
      outputStyle: 'expanded',
      // outputStyle: 'compressed'
    },
    autoprefixer: {
      // https://github.com/ai/browserslist
      browsers: ['last 2 versions', '> 1% in KR', 'ie 6-8'],
      cascade: false
    }
  }
}

/**
 *  Default task
 */
gulp.task('default', ['watch', 'sass', 'pug'], function() {
  gulp.start('serve')
})

gulp.task('sass', function() {
  gulp.src(conf.paths.sass.src)
    .pipe(sourcemaps.init()) // init sourcemaps
    .pipe(sass(conf.sass.process).on('error', sass.logError))
    .pipe(autoprefixer(conf.sass.autoprefixer))
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest(conf.paths.sass.dist))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('pug', function buildHTML() {
  return gulp.src(conf.paths.pug.src)
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(conf.paths.pug.dist))
});

/**
 * open local server for livereload
 */
gulp.task('serve', function() {
  browserSync.instance = browserSync.init({
    startPath: '/',
    server: {
      baseDir: `${conf.paths.src}`,
      directory: true,
    },
    port: 4000,
    open: false,
  })
})

/**
 * watch source files
 */
gulp.task('watch', function() {
  const reload = () => browserSync.reload()

  gulp.watch(
    [
      path.join(conf.paths.src, '/**/*.html'),
      path.join(conf.paths.src, '/**/*.js'),
      path.join(conf.paths.src, '/**/*.css'),
      path.join(conf.paths.src, '/**/*.scss'),
    ],
    function () {
      browserSync.reload()
    }
  )

  gulp.watch([conf.paths.sass.src], ['sass']);
  gulp.watch([conf.paths.pug.src], ['pug']);
})
