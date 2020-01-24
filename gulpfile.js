var gulp = require('gulp');
var sass = require('gulp-sass');
var svgSprite = require('gulp-svg-sprite');
var autoprefixer = require('gulp-autoprefixer');
var responsive = require('gulp-responsive');

// files
const svgFiles = ['./src/svg-icons/general/*.svg', './src/svg-icons/home/*.svg'];
const sassFiles = './src/sass/*.scss';
const images = ['./src/images/uploads/*.jpg'];


// SASS

function sassCompile(cb) {
	cb();

	gulp.src(sassFiles)
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('./build/css/'));
		
	
}


// make svg sprite

function spriteCompile(cb) {
	cb();

	svgFiles.forEach(function (srcLoc) {
		let srcName = srcLoc.split('/')[3];

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
			.pipe(gulp.dest('./src/_includes/assets'));

		return stream

	});

}


// resize images
function resizeImages(cb){
	cb();

	gulp.src(images)
		.pipe(
			responsive(
				{
					'*.jpg': [
						{
							width: 200,
							rename: { suffix: '-200' }
						},
						{
							width: 400,
							rename: { suffix: '-400' }
						},
						{
							width: 800,
							rename: { suffix: '-800' }
						}
					]
				},
				{
					quality: 85
				}
			)
		)
		.pipe(gulp.dest('./build/images/resized'));

}



// gulp tasks
exports.default = gulp.series(sassCompile, spriteCompile, resizeImages);

exports.build = gulp.series(sassCompile, spriteCompile, resizeImages);

exports.watch = function () {
	gulp.watch('./src/sass/**/*.scss', { ignoreInitial: false }, sassCompile);
	gulp.watch(svgFiles, { ignoreInitial: false }, spriteCompile);
	gulp.watch(images, { ignoreInitial: false }, resizeImages);
}