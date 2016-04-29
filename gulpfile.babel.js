'use strict';

import autoprefixer from 'gulp-autoprefixer';
import browserify from 'browserify';
import gulp from 'gulp';
import minifycss from 'gulp-cssnano';
import rename from 'gulp-rename';
import sass from 'gulp-ruby-sass';
import clean from 'gulp-clean';

let themePath = './assets/';

gulp.task('default', [ 'sass' ], () => {});

gulp.task('clean', () => {

  let cssResult = gulp.src(`${themePath}css`)
    .pipe(clean());
  return cssResult;

});

gulp.task('sass', [ 'clean' ], () => {

  return sass(`${themePath}scss/app.scss`, { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(`${themePath}css`))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(`${themePath}css`));

});

gulp.task('watch', [ 'sass' ], () => {
  gulp.watch(`${themePath}/scss/**/**/*.scss`, ['sass']);
});