'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var combinemq = require('gulp-combine-mq');

var gulpif = require('gulp-if');
var argv = require('yargs').argv;
var changed = require('gulp-changed');
var filter = require('gulp-filter');

var browserSync = require('browser-sync');

global.gulpConfig.sass = {
  errLogToConsole: true,
  outputStyle: 'expanded'
}

gulp.task('sass', function() {
 gulp.src( global.paths.sass.src )
    .pipe( sourcemaps.init() ) // init sourcemaps
    // .pipe(
    //   gulpif(
    //     argv.all === undefined ,
    //     changed( global.paths.sass.dist, { extension: '.css' })
    //   )
    // )
    // .pipe( sass( global.gulpConfig.sass )
    .pipe( sass( global.gulpConfig.sass.process ).on('error', sass.logError) )
    .pipe( autoprefixer({'browsers': ['last 2 versions']}) )
    .pipe( sourcemaps.write('./maps') )
    .pipe( gulp.dest( global.paths.sass.dist ) )
    .pipe( filter('**/*.css') )
    .pipe( browserSync.reload({stream: true}) );
});


