var gulp = require('gulp'), 
    compass = require('gulp-compass');

gulp.task('compass', function() {
    return gulp.src('styles/sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: './styles/css',
            sass: './styles/sass'
        }))
        .pipe(gulp.dest('styles/css'));
});