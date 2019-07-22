var gulp = require('gulp');
var sass = require('gulp-sass');
var svgSprite = require('gulp-svg-sprite');
var autoprefixer = require('gulp-autoprefixer');

// SASS

gulp.task('sass', function () {
	return gulp.src('./sass/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./css'));
});


// make svg sprite

gulp.task('svg', function () {

	let svgSrc = ['./svg-icons/general/*.svg', './svg-icons/home/*.svg'];

	svgSrc.forEach(function (srcLoc) {
		let srcName = srcLoc.split('/')[2];

		let stream = gulp.src(srcLoc)
			.pipe(svgSprite({
				shape: {
					id: {
						generator: "icon-%s"
					}
				},
				svg: {
					xmlDeclaration: false
				},
				mode: {
					symbol: {
						dest: '.',
						inline: true,
						prefix: 'icon-%s',
						bust: false,
						sprite: 'icon-sprite-' + srcName + '.svg'
					}
				}
			}))
			.pipe(gulp.dest('./images'));

		return stream

	});
});


// gulp tasks
gulp.task('default', ['sass']);

gulp.watch('./sass/**/*.scss', ['sass']);
