var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass-ns');
var plumber = require('gulp-plumber'); // stops gulp from stopping on errors 
var imageMin = require('gulp-imagemin');


gulp.task('default',function(){
    console.log('working');
})