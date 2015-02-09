var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var sass = require('gulp-ruby-sass');
var compass = require('gulp-compass');
var plumber = require("gulp-plumber");
var uglify = require('gulp-uglify');
var typescript = require('gulp-typescript');

///////////////////////////////////////////////////////////
// watch sass

gulp.task('default', function () {
    var css_dest = '../css';
    var sass_watch = '../sass/*.sass';

    gulp.watch(sass_watch).on('change', function (e) {
        gulp.src(sass_watch)
            .pipe(plumber())
            .pipe(sass({
                compass: true
            }))
            .pipe(minify({keepBreaks: false}))
            .pipe(gulp.dest(css_dest));
    });

    var ts_dest = '../js';
    var ts_watch = '../ts/*.ts';

    gulp.watch(ts_watch).on('change', function (e) {
        gulp.src(e.path)
            .pipe(plumber())
            .pipe(typescript({ target: "ES5", removeComments: true, sortOutput: true }))
            .pipe(uglify())
            .pipe(gulp.dest(ts_dest));
    });
});

///////////////////////////////////////////////////////////
// generate base js

var base_js_watch = [
    'bower_components/zepto/zepto.min.js',
    'bower_components/underscore/underscore.js',
    'bower_components/vue/dist/vue.min.js',
];
var generated = '../js';

gulp.task('base_js', function () {
    gulp.src(base_js_watch)
        .pipe(uglify())
        .pipe(concat('base.js'))
        .pipe(gulp.dest(generated));
});
