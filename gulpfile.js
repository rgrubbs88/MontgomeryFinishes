var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var less        = require('gulp-less');

// Static Server + watching scss/html files
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/assets/less/*.less", ['less']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Compile less into CSS & auto-inject into browsers
gulp.task('less', function() {
    return gulp.src("src/assets/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("src/assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);