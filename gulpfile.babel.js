'use strict';

import autoprefixer from 'gulp-autoprefixer';
import gulp from 'gulp';
import minifycss from 'gulp-cssnano';
import rename from 'gulp-rename';
import sass from 'gulp-ruby-sass';
import clean from 'gulp-clean';

let sourcePath = './source/',
  distPath = './dist/';

gulp.task('default', [ 'sass' ], () => {});

gulp.task('clean', () => {

  let cssResult = gulp.src(`${distPath}css`)
    .pipe(clean());
  return cssResult;

});

gulp.task('sass', [ 'clean' ], () => {

  return sass(`${sourcePath}scss/app.scss`, { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(`${distPath}css`))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(`${distPath}css`));

});

gulp.task('watch', [ 'sass' ], () => {
  gulp.watch(`${sourcePath}/scss/**/**/*.scss`, ['sass']);
});