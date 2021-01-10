const gulp = require('gulp')
const critical = require('critical').stream
const config = require('../config')

const markup = config.directories.dist.markup

gulp.task('critical', () =>
  gulp.src(markup + '/*.html')
    .pipe(critical({
      base: markup,
      inline: true
    }))
    .on('error', config.onError)
    .pipe(gulp.dest(markup))
)
