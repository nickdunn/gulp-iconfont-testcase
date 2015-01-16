var gulp = require('gulp'),
    iconfont = require('gulp-iconfont');

gulp.task('iconfont', function() {
  gulp.src('input/*.svg')
    .pipe(iconfont({
      fontName: 'myicons',
      appendCodepoints: true
    }))
    .pipe(gulp.dest('output'));
});
