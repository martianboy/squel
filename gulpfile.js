require('coffee-script/register');

const gulp = require('gulp'),
  umd = require('gulp-umd'),
  concat = require('gulp-concat'),
  insert = require('gulp-insert'),
  babel = require('gulp-babel'),
  replace = require('gulp-replace'),
  uglify = require('gulp-uglify');

const SQUEL_VERSION = require('./package.json').version;

gulp.task('build-basic', function() {
  return gulp.src([
      './src/core.js',
    ])
    .pipe( concat('squel-basic.js') )
    .pipe( replace(/<<VERSION_STRING>>/i, SQUEL_VERSION) )
    .pipe( babel({
      presets: ['@babel/preset-env']
    }) )
    .pipe( umd({
      exports: function (file) {
        return 'squel';
      },
      namespace: function(file) {
        return 'squel';
      }
    }))
    .pipe( gulp.dest('./dist') )
    .pipe( uglify() )
    .pipe( insert.prepend('/*! squel | https://github.com/hiddentao/squel | BSD license */') )
    .pipe( concat('squel-basic.min.js') )
    .pipe( gulp.dest('./dist') )
});


gulp.task('build-full', function() {
  return gulp.src([
      './src/core.js',
      './src/mssql.js',
      './src/mysql.js',
      './src/postgres.js',
    ])
    .pipe( concat('squel.js') )
    .pipe( replace(/<<VERSION_STRING>>/i, SQUEL_VERSION) )
    .pipe( babel({
      presets: ['@babel/preset-env']
    }) )
    .pipe( umd({
      exports: function (file) {
        return 'squel';
      },
      namespace: function(file) {
        return 'squel';
      }
    }))
    .pipe( gulp.dest('./dist') )
    .pipe( uglify() )
    .pipe( insert.prepend('/*! squel | https://github.com/hiddentao/squel | BSD license */') )
    .pipe( concat('squel.min.js') )
    .pipe( gulp.dest('./dist') )
});


gulp.task('build', gulp.series('build-basic', 'build-full'));

gulp.task('default', gulp.series('build-basic', 'build-full'));
