var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('scripts', function () {
  gulp.src([
    'scripts/vendor/angular.js',
    'scripts/app.js',
    'scripts/controllers/GlobalController.js',
    'scripts/directives/header-content.js',
    'scripts/directives/main-content.js'])
  .pipe(concat("bundle.js"))
  .pipe(gulp.dest("scripts"));
});

gulp.task('default', ['scripts']);