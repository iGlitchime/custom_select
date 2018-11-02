let gulp = require('gulp');
let plumber = require('gulp-plumber');
let sass = require('gulp-sass');
let clean = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let pump = require('pump');



gulp.task('compressSASS', function (cb) {
    pump([
                gulp.src('src/scss/main.scss'),
                plumber(),
                sass(),
                clean(),
                gulp.dest('build/css')
            ],
            cb
    );
});

gulp.task('compressJS', function (cb) {
    pump([
                gulp.src('src/js/main.js'),
                uglify(),
                gulp.dest('build/js'),

            ],
            cb
    );
});

gulp.task('watch', () => {
    gulp.watch('src/scss/**/*.scss', ['compressSASS']);
    gulp.watch('src/js/**/*.js', ['compressJS']);
});

gulp.task('default', ['watch']);