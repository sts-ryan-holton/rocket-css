var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('assets/scss/rocketcss.scss').pipe(sass()).pipe(autoprefixer({
    browsers: [
      "last 2 versions",
      ">= 0.2%",
      "Chrome >= 55",
      "Firefox >= 54",
      "iOS >= 10",
      "Safari >= 10",
      "Android >= 4.4"
	   ],
    cascade: false
  })).pipe(cleanCSS({
    level: {
      1: {
        all: true,
        tidySelectors: true
      }
    }
  })).pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError)).pipe(gulp.dest('rocketcss-dist/css/'))
})

gulp.task('production', ['sass']);
