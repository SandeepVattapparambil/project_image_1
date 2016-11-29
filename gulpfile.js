var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser sync instance.
var reload = bs.reload;

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

// Watch files for changes
gulp.task('watch', ['browser-sync'], function() {
    // Watch HTML files
    gulp.watch('*.html', reload);
    // Watch css files
    gulp.watch('assets/css/*', ['css']);
    // Watch JS files
    gulp.watch('assets/js/*', ['js']);
    // Watch image files
    gulp.watch('assets/images/*', ['images']);
});
// Default task
gulp.task('default', ['watch', 'browser-sync']);
