var gulp = require("gulp");
var util = require("gulp-util");
var bsync = require("browser-sync").create();

gulp.task('default',['build', 'watch'], function(){
    return bsync.init({server: {baseDir: './dist'}});
});

gulp.task('build', [], function(){
    return gulp.src('src/**/*')
    .pipe(gulp.dest('dist/'));	
});

gulp.task('watch', [], function(){
    gulp.watch('src/**/*', function (){
		gulp.start('build');
        util.log('REFRESH');
        bsync.reload();
	});
});
