'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.task('default', ['sass', 'copy'], function () {

});


// gulp.task('copy', ['clean-scripts'], function() {
//   return gulp.src(['./src/index.js', './node_modules/jquery/dist/jquery.js']) 
//     .pipe(concat('index.js'))
//     .pipe(gulp.dest('./public/js'));
// });

gulp.task('copy', ['clean-scripts'], function () {
    return gulp
        .src('./src/index.js')
        .pipe(gulp.dest('./public/js'));
});

gulp.task('clean-scripts', function () {
    return gulp.src('./public/js')
        .pipe(clean({force: true}));
});


gulp.task('clean-css', function () {
    return gulp.src('./public/css/*')
        .pipe(clean({force: true}));
});


gulp.task('sass', ['clean-css'], function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});