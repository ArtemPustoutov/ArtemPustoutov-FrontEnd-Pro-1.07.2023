const gulp = require('gulp');
var concat = require('gulp-concat');
const webpack = require('webpack-stream');

const cssFiles = [
    './src/App.css',
    './src/index.css'
]

function styles () {
    return gulp.src(cssFiles)
            .pipe(concat('some.css'))
            .pipe(gulp.dest('./build/css'))
}

gulp.task('styles', styles)
gulp.task('scripts', scripts)