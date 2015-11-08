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
    sass:['./public/src/scss/*.scss'],
    sass1:['./public/src/scss/partials/**/*.scss'],
    ejs:['./public/src/pages/*.ejs'],
    ejs1:['./public/src/pages/partials/**/*.ejs'],
    js:['./public/src/js/*.js'],
    js1:['./public/src/js/controllers/*.js']
}

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass())
        .on('error',sass.logError)
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('public/dist/stylesheets'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('public/dist/stylesheets/min'));
});

// Compile Our Sass
gulp.task('ejs', function() {
    return gulp.src(paths.ejs)
        .pipe(ejs({msg:"Gulping EJS"}))
        .on('error',gutil.log)
        .pipe(gulp.dest('public/dist/views'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch([paths.sass,paths.sass1], ['sass']);
    gulp.watch([paths.ejs,paths.ejs1], ['ejs']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'ejs', 'scripts', 'watch']);