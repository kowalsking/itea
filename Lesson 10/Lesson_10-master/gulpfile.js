/*jshint strict:false */
/*jshint esversion: 6 */
/*jslint node: true */
//
// "use strict";
// npm install gulpjs/gulp#4.0 --save-dev

const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const gulpIf = require('gulp-if');
const del = require('del');
const newer = require('gulp-newer');
const autoprefixer = require('gulp-autoprefixer');
const debug = require('gulp-debug');
const svgSprite = require('gulp-svg-sprite');
const urlAdjuster = require('gulp-css-url-adjuster');
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");

gulp.task('clean', function(){
    return del(['public/', 'gulp/tmp']);
});
gulp.task('clean:svg', function(){
    return del(['gulp/tmp/','public/images/sprite/']);
});
gulp.task('styles', function(){
    return gulp.src('gulp/less/*.less')
      .pipe( less({
        env: 'production'
      }) )
      .pipe( concat('style.min.css') )
      .pipe( gulp.dest('public/css') );
});
gulp.task('assets', function() {
    return gulp.src('gulp/assets/**')
      .pipe( newer('public') )
      .pipe( debug({ title: 'ast:' }) )
      .pipe( gulp.dest('public') );
});
gulp.task('images', function(){
  return gulp.src('frontend/assets/**/*.{png,jpg,jpeg}', {since: gulp.lastRun('assets')})
  .pipe( gulp.dest('public'));
});
gulp.task('images:svg', function(){
  return gulp.src('gulp/sprite/**/*.svg')
   .pipe( svgSprite({
     shape: {
         spacing: {			// Add padding
      			padding: 3
          }
     },
     mode: {
       css: {
           dest:       '.', // where to put style && sprite, default: 'css'
           sprite:     'sprite.svg', // filename for sprite relative to dest
           layout:     'vertical',
           prefix:     '.svg__', // .svg-
           dimensions: true,
           render:     {
             less: {
               dest: 'sprite.less'  // filename for .styl relative to dest^
             }
           }
        }
     }

   }))
  .pipe( debug({ title: 'sprite:' }) )
  .pipe( gulpIf( '*.less', gulp.dest('gulp/tmp'), gulp.dest('public/images/sprite')) );
});
gulp.task('replaceurl', function(){
    return gulp.src('public/css/style.min.css')
      .pipe(urlAdjuster({
         replace:  ['sprite-','../images/sprite/sprite-'],
      }))
      .pipe(gulp.dest("public/css/"));
});

gulp.task('build', gulp.series('clean', 'images', 'images:svg', 'styles', 'assets', 'replaceurl' ));
gulp.task('watch', function() {
    gulp.watch( 'gulp/**/*.less', gulp.series( 'styles', 'replaceurl' ) );
    gulp.watch( 'gulp/tmp/**/*.less', gulp.series( 'styles', 'replaceurl' ) );
    gulp.watch( 'gulp/assets/**/*.*', gulp.series( 'assets', 'images' ) );
    gulp.watch( 'gulp/styles/**/*.{png,jpg}', gulp.series('images'));
    gulp.watch( 'gulp/sprite/**/*.svg', gulp.series( 'clean:svg', 'images:svg', 'styles', 'replaceurl' ) );
});
gulp.task('serve', function(){
  browserSync.init({
    server: "public"
  });
  browserSync.watch('public/**/*.*').on('change', browserSync.reload );
});

gulp.task('dev',
  gulp.series(
    'build',
    gulp.parallel('watch', 'serve')
  )
);
