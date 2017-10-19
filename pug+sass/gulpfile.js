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
  .pipe(browserSync.reload({ stream: true }));
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
  gulp.watch(path.join(conf.paths.src, '/**/*.pug'), ['pug'])
  gulp.watch(
    [
      path.join(conf.paths.src, '/**/*.scss'),
      path.join(conf.paths.src, '/**/*.sass'),
    ],
    ['sass']
  )

  gulp.watch(
    [
      path.join(conf.paths.src, '/**/*.js'),
    ],
    function() {
      browserSync.reload({ stream: true })
    }
  )
})
