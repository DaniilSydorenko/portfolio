var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    gutil = require('gulp-util'),
    liveReload = require('gulp-livereload'),
    minify = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    merge = require('merge-stream'),
    ncu = require('npm-check-updates'),
    paths = {
        dirs: {
            build: '.dist',
            js: 'dist/js',
            css: 'dist/css',
            images: 'dist/img/projects_img'
        },
        files: {
            js: 'dist/js/*.js',
            css: 'dist/css/*.css',
            images: 'assets/img/projects_img/*'
        },
        components: {
            sass: 'src/scss/main.scss',
            js: 'assets/js/*.js'
        },
        vendors: {
            js: [
                "assets/libs/modernizr-custom.js",
                "bower_components/jquery/dist/jquery.js",
                "bower_components/wow/dist/wow.js",
                "bower_components/vide/dist/jquery.vide.js",
                "bower_components/angular/angular.js",
                "bower_components/angular-route/angular-route.js",
                "app/**/*.js",
                "assets/js/main.js"
            ],
            css: [
                "bower_components/flexboxgrid/dist/flexboxgrid.css",
                "bower_components/wow/css/libs/animate.css",
                "bower_components/font-awesome/css/font-awesome.css",
                "assets/css/style.css"
            ]
        }
    };

gulp.task('update', function () {
    ncu.run({
        // Always specify the path to the package file
        packageFile: 'package.json',
        // Any command-line option can be specified here:
        silent: true,
        jsonUpgraded: true
    }).then(function (upgraded) {
        console.log('dependencies to upgrade:', upgraded);
        console.log('Use: ncu --upgradeAll & npm install');
    });
});

gulp.task('clean', function (done) {
    gulp.src(['dist'], {
            read: false
        })
        .pipe(clean())
        .on('end', function () {
            gutil.log('All cleaned!');
        });
    done();
});

gulp.task('clean-js', function (done) {
    gulp.src(paths.files.js, {
            read: false
        })
        .pipe(clean());
    done();
});

gulp.task('clean-css', function (done) {
    gulp.src(paths.files.css, {
            read: false
        })
        .pipe(clean());
    done();
});

gulp.task('concat-minify-js', function (done) {
    gulp.src(paths.vendors.js)
        .pipe(concat('build'))
        .pipe(uglify())
        .pipe(rename({
            extname: ".min.js"
        }))
        .pipe(gulp.dest(paths.dirs.js))
        .pipe(liveReload({
            auto: false
        }))
        .on('end', function () {
            gutil.log('Scripts concatenated and merged!');
        });
    done();
});

gulp.task('concat-minify-css', function (done) {
    var sassStream = gulp.src(paths.components.sass)
        .pipe(sass({
            errLogToConsole: true
        }));

    var cssStream = gulp.src(paths.vendors.css);
    var mergedStream = merge(sassStream, cssStream)
        .pipe(concat('build.min.css'))
        .pipe(minify({
            keepBreaks: true
        }))
        .pipe(gulp.dest(paths.dirs.css))
        .on('end', function () {
            gutil.log('Styles concatenated and merged!');
        });

    done();

    return mergedStream;
});

gulp.task('compress', function (done) {
    gulp.src(paths.files.images)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.dirs.images));
    done();
});

gulp.task('watch', function (done) {
    gulp.watch('./src/scss/**/*.scss', gulp.series('concat-minify-css'));
    gulp.watch('./assets/js/*.js', gulp.series('clean-js',
        gulp.parallel('concat-minify-js')
    ));
    gulp.watch('./app/**/*.js', gulp.series('clean-js',
        gulp.parallel('concat-minify-js')
    ));
    gulp.watch('./assets/img/**/*',
        gulp.series('compress')
    );
    done();
});

gulp.task('default', gulp.series('concat-minify-css',
    gulp.parallel('concat-minify-js', 'watch')
));