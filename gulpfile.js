'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-express');

gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/style'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/scss/*.scss', ['sass']);
});

gulp.task('server', function() {
    server.run(['./server.js']);
});

gulp.task('default', ['sass:watch', 'server']);