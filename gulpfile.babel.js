'use strict';

import autoprefixer from 'gulp-autoprefixer';
import gulp from 'gulp';
import minifycss from 'gulp-cssnano';
import rename from 'gulp-rename';
import sass from 'gulp-ruby-sass';
import clean from 'gulp-clean';
import source from 'vinyl-source-stream';
import glob from 'glob';
import jshint from 'gulp-jshint';
import buffer from 'vinyl-buffer';
import jsminify from 'gulp-minify';
import browserify from 'browserify';

let sourcePath = './source/',
  distPath = './dist/';

gulp.task('default', [ 'sass', 'js' ], () => {});

gulp.task('clean', () => {

  let cssResult = gulp.src(`${distPath}css`)
    .pipe(clean());

  let jsResult = gulp.src(`${distPath}js`)
    .pipe(clean());

  return cssResult && jsResult;

});

gulp.task('sass', [ 'clean' ], () => {

  return sass(`${sourcePath}scss/app.scss`, { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(`${distPath}css`))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(`${distPath}css`));

});

gulp.task('js', [ 'clean' ], () => {

  let entries = glob.sync(`${sourcePath}js/*.js`);
  browserify({entries: entries, debug: true})
    .transform('babelify')
    .bundle()
    .on('error', (err) => console.error(err) )
    .pipe(source(`app.js`))
    .pipe(buffer())    
    .pipe(jsminify())
    .pipe(gulp.dest(`${distPath}js`));

});

gulp.task('watch', [ 'sass' ], () => {

  gulp.watch(`${sourcePath}scss/**/**/*.scss`, ['sass']);
  gulp.watch(`${sourcePath}js/*.js`, ['js']);

});