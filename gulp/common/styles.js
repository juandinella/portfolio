const gulp = require('gulp')
const config = require('../config')
const styles = require('@pixel2html/pipes').styles

const production = config.production

gulp.task('main:styles', () =>
  gulp.src(config.project.cssFiles)
    .pipe(styles({
      modules: true,
      name: 'main.css',
      production: production
    })())
    .on('error', config.onError)
    .pipe(gulp.dest(config.directories.dist.styles))
)

gulp.task('vendor:styles', () =>
  gulp.src(config.project.cssVendorFile)
    .pipe(styles({
      modules: false,
      name: 'vendor.css',
      production: production
    })())
    .on('error', config.onError)
    .pipe(gulp.dest(config.directories.dist.styles))
)

gulp.task('font:styles', () =>
  gulp.src(config.project.cssFontFile)
    .pipe(styles({
      modules: false,
      name: 'fonts.css',
      production: production
    })())
    .on('error', config.onError)
    .pipe(gulp.dest(config.directories.dist.styles))
)

gulp.task('styles', gulp.series('main:styles', 'vendor:styles', 'font:styles', 'writeModules'))
