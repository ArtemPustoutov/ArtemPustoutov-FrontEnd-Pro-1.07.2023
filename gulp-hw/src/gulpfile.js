const gulp = require('gulp');
var concat = require('gulp-concat');

const cssFiles = [
    './src/App.css',
    './src/index.css'
]

function styles () {
    return gulp.src(cssFiles)
            .pipe(concat('all.css'))
            .pipe(gulp.dest('./build/css'))
}

gulp.task('styles', styles)
