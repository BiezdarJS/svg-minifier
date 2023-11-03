const gulp = require('gulp');
const { watch } = require('gulp');
const svgo = require('gulp-svgo');
const debug = require('gulp-debug');
const newer = require('gulp-newer');



function svgOptimizeTask(done) {
  return gulp.src('app/**/*.+(svg)')
      .pipe(newer('wp-content/themes/golden-ingredients/dist/img'))
      .pipe(debug({title: 'pliki-przeniesone:'}))
      .pipe(svgo())
      .pipe(gulp.dest('dist/'))
      done();
}


function watchTask() {
  watch('app/**/*.+(svg)', svgOptimizeTask);  
}


exports.default = watchTask;