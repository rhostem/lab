'use strict';
var conf = {
  paths: {
    src: 'src',
    dist: 'dist',
  }
};
var path = require('path');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var conf = {
  paths: {
    src: 'src',
    dist: 'dist',
  },
  errorHandler: function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  },
};

var postcss = require('postcss');
var sprites = require('postcss-sprites').default;
var updateRule = require('postcss-sprites').updateRule;

/**
 *  Default task
 */
gulp.task('default', ['watch', 'styles'], function () {
  gulp.start('serve');
});

/**
 * open local server for livereload
 */
gulp.task('serve', function() {
  browserSync.instance = browserSync.init({
    startPath: '/',
    server: {
      baseDir: './',
      directory: true,
    },
    port: 4000,
    open: false,
  });
});

/**
 * watch source files
 */
gulp.task('watch', function () {
  gulp.watch([
      path.join(conf.paths.src, '/**/*.css'),
      path.join('!' + conf.paths.src, '/style.css')
    ], function () {
      gulp.start('styles-reload');
    });

  gulp.watch([path.join(conf.paths.src, '/**/*.html')], function () {
    browserSync.reload();
  });
});

/**
 * build stylesheet
 */
gulp.task('styles', function() {
  return buildStyles();
});

/**
 * build stylesheet with live reload
 */
gulp.task('styles-reload', ['stylelint'], function() {
  return buildStyles()
    .pipe(browserSync.stream());
});

/**
 * lint stylesheet
 */
gulp.task('stylelint', function() {
  return gulp.src([
    path.join(conf.paths.src, '/**/*.css'),
    path.join('!' + conf.paths.src, '/style.css'),
  ])
  .pipe($.postcss([
    require('stylelint')(),
    require('postcss-reporter')({ clearMessages: true }),
    ]));
});

/**
 * build stylesheet
 */
var buildStyles = function() {
  /**
   * inject all files from src
   * @type {[type]}
   */
  var injectFiles = gulp.src([
      path.join(conf.paths.src, '/**/*.css'),
      path.join('!' + conf.paths.src, '/style.inject.css'),
      path.join('!' + conf.paths.src, '/style.css'),
    ], { read: false });

  var injectOptions = {
    transform: function(filePath) {
      console.log(filePath);
      filePath = filePath.replace('src/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '/* injector */',
    endtag: '/* endinjector */',
    addRootSlash: false
  };

  /**
   * postcss 프로세서 목록
   */
  var postcssProcessors = [
    require('postcss-import')(),
    require('postcss-url')(),
    require('postcss-cssnext')({
      'browsers': ['last 2 versions', '> 1% in KR', 'ie 9-10', 'Firefox ESR'],
    }),
    require('precss')(),
    require('lost'),
    require('postcss-assets')({
      baseUrl: '/',
      loadPaths: [
        'assets/images/',
        'assets/images/map',
        'assets/fonts/',
      ],
      cachebuster: true,
    }),
    require('postcss-utilities'),
    require('postcss-short')(),
    // require('postcss-sprites').default({
    //   stylesheetPath: './src',
    //   spritePath: './assets/sprites/',
    //   retina: true,
    //   groupBy: function(image) {
    //     // 경로에 map을 포함하고 있을 경우, 스프라이트 파일을 별도로 저장
    //     if (image.url.indexOf('map') === -1) {
    //       return Promise.reject();
    //     }
    //     return Promise.resolve('map');
    //   },
    //   hooks: {
    //     onUpdateRule: function(rule, token, image) {
    //       // Use built-in logic for background-image & background-position
    //       updateRule(rule, token, image);
    //       ['width', 'height'].forEach(function(prop) {
    //         rule.insertAfter(rule.last, postcss.decl({
    //           prop: prop,
    //           value: (image.url.indexOf('@2x') > -1) ? // if retina image
    //             (image.coords[prop] / 2) + 'px' :
    //             image.coords[prop] + 'px'
    //         }));
    //       });
    //     }
    //   }
    // }),
    require('postcss-browser-reporter')(),
  ];

  return gulp.src([
    path.join(conf.paths.src, '/style.inject.css')
  ])
    .pipe($.rename('style.css'))
    .pipe($.inject(injectFiles, injectOptions))
    .pipe($.sourcemaps.init())
    .pipe($.postcss(postcssProcessors))
    .on('error', conf.errorHandler('postcss'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(conf.paths.src));
};

