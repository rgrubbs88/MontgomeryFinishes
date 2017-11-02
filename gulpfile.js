var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var less        = require('gulp-less');
var del         = require('del');
var runSequence = require('run-sequence');

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

gulp.task('build', function() {
    runSequence('clean', 'copy-build')
});

gulp.task('copy-build', function() {
    // var pattern = "src/assets/**";
    return gulp.src(['src/**/*', '!src/less**/**'])
    .pipe(gulp.dest("build/"));
});

gulp.task('clean', function () {
    return del(['./build'], {force: true});
 });

gulp.task('default', ['serve']);