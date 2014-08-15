'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    rename = require('gulp-rename'),
    sourcemap = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

//////////////////////////////
// Lint
//////////////////////////////
gulp.task('lint', function () {
  return gulp.src('build/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('build', function () {
  return gulp.watch('build/**/*', ['lint']);
});

gulp.task('dist', function () {
  gulp.src('build/**/*.js')
    .pipe(rename({
        extname: '.min.js'
      }))
    .pipe(sourcemap.init())
    .pipe(uglify())
    .pipe(sourcemap.write('./'))
    .pipe(gulp.dest('dist'));
});