/*

Run these commands

## if the project is already set up and running:
npm install

## if you check package.json and there aren't dependencies listed ( there should be no reason to do this )
npm install gulp
npm install gulp-concat --save-dev
npm install gulp-plumber --save-dev
npm install gulp-autoprefixer --save-dev
npm install gulp-clean-css --save-dev
npm install gulp-terser --save-dev
npm install gulp-rename --save-dev
npm install gulp-notify --save-dev
npm install gulp-sass --save-dev
npm install gulp-sass-glob --save-dev
npm install gulp-load-plugins --save-dev

## always ( to compile/watch/etc )
gulp
*/

// Config for theme
var themePath  = './';
var projectURL = 'http://local.loc/';
// Gulp Nodes
var gulp        = require( 'gulp' ),
    gulpPlugins = require( 'gulp-load-plugins' )();

const babel   = require( 'gulp-babel' );

// Browserstack
const browserSync = require('browser-sync').create();

// Error Handling
var onError = function( err ) {
    console.log( 'An error occurred:', err.message );
    this.emit( 'end' );
};

gulp.task('scss', function () {
    const { concat, autoprefixer, cleanCss, notify, plumber, sass, sassGlob } = gulpPlugins;
    // return sass(themePath + 'style.scss', { sourcemap: false })
    return gulp.src(themePath + 'src/styles/style.scss', {sourcemap: true })
        .on('error', sass.logError)
        .pipe(plumber())
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer('last 4 version'))
        .pipe(cleanCss())
        .pipe(concat('dist/style.css'))
        .pipe(gulp.dest(themePath))
        .pipe(notify({ message: 'Styles Compiled' }));
});

gulp.task('scripts', function() {
    const { concat, notify, plumber, rename, babel } = gulpPlugins;
    return gulp.src( [themePath + 'src/js/plugins/**/*.js', themePath + 'src/js/development/**/*.js'] )
        .pipe(plumber())
        .pipe(concat('dist/scripts.js'))
        .pipe(gulp.dest(themePath))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(themePath))
        .pipe(notify({ message: 'Scripts Compiled' }))
        .pipe(babel({
            presets: ['@babel/env']
        }));
});

// Watch task -- this runs on every save.
gulp.task( 'watch', function() {
    browserSync.init({
        proxy: projectURL,
        // `true` Automatically open the browser with BrowserSync live server.
        // `false` Stop the browser from automatically opening.
        //open: true,
        injectChanges: true,
    });

    // Watch all .scss files
    gulp.watch( themePath + '**/**/**/*.scss', gulp.series( 'scss' ) ).on('change',browserSync.reload);
    gulp.watch( themePath + '**/**/*.html').on('change',browserSync.reload);
    gulp.watch( themePath + '**/**/*.php').on('change',browserSync.reload);

    // Watch js files
    gulp.watch( themePath + 'src/js/development/**/*.js', gulp.series( 'scripts' ) ).on('change',browserSync.reload);
});

gulp.task('clearCache', function() {
    // Still pass the files to clear cache for
    gulp.src(themePath + '**/**/**/*.scss');
    gulp.src(themePath + '**/**/*.html');
    gulp.src(themePath + '**/**/*.php')
      .pipe(cache.clear());
  
    // Or, just call this for everything
    cache.clearAll();
    on('change',browserSync.reload);
  });

// Default task -- runs scss and watch functions
gulp.task( 'default', gulp.series('scripts', 'scss', 'watch'));