var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var ejs = require('gulp-ejs');

var paths = {
    sass:['./public/src/**/*.scss'],
    ejs:['./public/src/**/*.ejs'],
    ejsSrc:['./public/src/**/*.ejs','!./public/src/shared/**/*.ejs','!./public/src/**/_*.ejs'],
    js:['./public/src/**/*.js','!./public/src/shared/**/*.js']
}     

// Compile Our EJS
gulp.task('sass', function() {
    return gulp.src(paths.sass,{base: './public/src'})
        .pipe(sass())
        .on('error',sass.logError)
        .pipe(autoprefixer('last 2 version'))        
        .pipe(concat('main.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./public/build'));
});

// Compile Our EJS
gulp.task('ejs', function() {
    return gulp.src(paths.ejsSrc,{base: './public/src'})
        .pipe(ejs({msg:"Gulping EJS"}))
        .on('error',gutil.log)
        .pipe(gulp.dest('./public/build'));
});

//Compile JS files
gulp.task('js', function() {
  return gulp.src(paths.js,{base: './public/src'})
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('./public/build'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch([paths.sass], ['sass']);
    gulp.watch([paths.ejs], ['ejs']);
    gulp.watch([paths.js], ['js']);
});

// Default Task
gulp.task('default', ['sass','ejs','js','watch']);