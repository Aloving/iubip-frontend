var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var del = require('del');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var args = require('yargs').argv;
var gulpif = require('gulp-if');
var beautify = require('gulp-jsbeautifier');
var emit = require("emit");

var production = (args.env == "production") ? true : false;
var debug = (args.env == "production") ? false : true;

gulp.task('sass', function(){

  gulp.src('./sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['> 1%', 'last 2 versions'],
    cascade: false
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('../static/css/'))
  .pipe(browserSync.stream());
});


gulp.task('del', function(){
  del(['../static/**/*.map'], {force: true});
});

gulp.task('lk_sass', function(){

  gulp.src('./lk_sass/*.scss')
  .pipe(gulpif(!production, sourcemaps.init()))
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['> 1%', 'last 2 versions'],
    cascade: false
  }))
  .pipe(gulpif(!production, sourcemaps.write('.')))
  .pipe(gulp.dest('../static/lk_css/'))
  .pipe(browserSync.stream());

});

gulp.task('browser-sync', ['sass','lk_sass'], function() {
    var env = args.env || 'office';

    if( env == 'office' ){
      browserSync.init({
          proxy: "http://127.0.0.1:8000/"
      });
    }else{
      browserSync.init({
          proxy: "http://192.168.1.6:8000/"
      });
    }

  gulp.watch(['./sass/**/*[^_].scss'], ['sass']);
  gulp.watch(['./sass/**/*[^_].css'], ['sass']);

  gulp.watch(['./lk_sass/**/*[^_].scss'], ['lk_sass']);
  gulp.watch(['./lk_sass/**/*[^_].css'], ['lk_sass']);

});

gulp.task('prettify', function() {
  gulp.src(['./js/**/*.js'])
    .pipe(beautify({
      indent_char: '  ',
      js: {
        indent_size: 1
      }
    }))
    .pipe(gulp.dest('./js/'));
});


//js init
var jsTasks = [
  'watchify-commonjs',
  'watchify-searchJs',
  'watchify-newsListJs',
  'watchify-deatilNewJs',
  'watchify-documetsListJs',
  'watchify-teacherjs',
  'watchify-registerjs',
  'watchify-catalog',
  'watchify-indexJs',
  'watchify-detailJs',
  'watchify-teacherDetail',
  'watchify-aboutJs'
];

gulp.task('jsIniter',jsTasks, function(){
  console.log('js watcher started')
})


//detail js
gulp.task('watchify-teacherDetail', function(){

  return jsWatcher({
    path: './js/teacher-detail-app.js',
    name: 'teacher-detail-app.js',
    sourcePath: '../static/js/'
  },debug, production)

});

//register js
gulp.task('watchify-commonjs', function(){

  return jsWatcher({
    path: './js/register-app.js',
    name: 'register-app.js',
    sourcePath: '../static/js/'
  },debug, production)

});

//common js
gulp.task('watchify-registerjs', function(){

  return jsWatcher({
    path: './js/common.js',
    name: 'bundle.js',
    sourcePath: '../static/js/'
  },debug, production)

});

//index js
gulp.task('watchify-indexJs', function(){

  return jsWatcher({
    path: './js/index-app.js',
    name: 'index-app.js',
    sourcePath: '../static/js/'
  },debug, production)

});

//new-detail js
gulp.task('watchify-deatilNewJs', function(){

  return jsWatcher({
    path: './js/new-detail-app.js',
    name: 'new-detail-app.js',
    sourcePath: '../static/js/'
  },debug, production)

});

//detail js
gulp.task('watchify-teacherjs', function(){

  return jsWatcher({
    path: './js/teacher-list-app.js',
    name: 'teacher-list-app.js',
    sourcePath: '../static/js/'
  },debug, production)
  
});

//detail js
gulp.task('watchify-detailJs', function(){

  return jsWatcher({
    path: './js/detail-app.js',
    name: 'detail-app.js',
    sourcePath: '../static/js/'
  },debug, production)
  
});

//search js
gulp.task('watchify-searchJs', function(){

  return jsWatcher({
    path: './js/search-app.js',
    name: 'search-app.js',
    sourcePath: '../static/js/'
  },debug, production)

});

//catalog
gulp.task('watchify-catalog', function(){

  return jsWatcher({
    path: './js/catalog-app.js',
    name: 'catalog-app.js',
    sourcePath: '../static/js/'
  },debug, production)
});

//documents-list
gulp.task('watchify-documetsListJs', function(){

  return jsWatcher({
    path: './js/documents-list-app.js',
    name: 'documents-list-app.js',
    sourcePath: '../static/js/'
  },debug, production)
  
});

//about page
gulp.task('watchify-aboutJs', function(){

  return jsWatcher({
    path: './js/about-app.js',
    name: 'about-app.js',
    sourcePath: '../static/js/'
  },debug, production)

});

gulp.task('watchify-newsListJs', function(){

  return jsWatcher({
    path: './js/news-list-app.js',
    name: 'news-list-app.js',
    sourcePath: '../static/js/'
  },debug, production)

});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

function jsWatcher(file, debug, production){
  var sourcefile = file.path;
  var fileName = file.name;
  var sourcePath = file.sourcePath;

  var bundle = browserify({
    entries: [sourcefile],
    cache: {},
    debug: debug,
    packageCache: {},
    plugin: [watchify]
  });

  bundle.on('update', bundleFunc);
  bundleFunc();

  bundle.on('log', function (msg) {
    var log = [];
    if(msg){
      console.log(`${sourcefile} was written`);
    }
  });

  function bundleFunc() {
    bundle
      .bundle()
      .on('error', handleError)
      .pipe(source(fileName))
      .pipe(gulpif(production,streamify(uglify())))
      .pipe(gulp.dest(sourcePath));
  }

  return bundleFunc;
}


var tasks = [
  'browser-sync',
  'jsIniter'
  ];

if( production ) tasks.push('del');

gulp.task('default', tasks);
