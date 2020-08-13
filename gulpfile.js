const gulp = require('gulp');
const sass = require('gulp-sass');
const svgSprite = require('gulp-svg-sprite');
const responsive = require('gulp-responsive');

// files
const svgFiles = './src/svg-icons/*.svg';
const sassFiles = './src/sass/**/*.scss';
const images = './src/images/uploads/*.jpg';


// SASS

function sassCompile(cb) {
	
	gulp.src(sassFiles)
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest('./build/css/'));

	cb();
}


// make svg sprite

function spriteCompile(cb) {

	gulp.src(svgFiles)
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
					sprite: 'icon-sprite.svg'
				}
			}
		}))
		.pipe(gulp.dest('./src/_includes/partials'));

	cb();

}


// resize images
function resizeImages(cb) {

	gulp.src(images)
		.pipe(
			responsive(
				{
					'*.jpg': [
						{
							width: 200,
							rename: { suffix: '-small' }
						},
						{
							width: 400,
							rename: { suffix: '-medium' }
						},
						{
							width: 800,
							rename: { suffix: '-large' }
						},
						{
							rename: { suffix: '-full' }
						}
					]
				},
				{
					quality: 90,
					silent: true,
					errorOnEnlargement: false,
					skipOnEnlargement: true
				}
			)
		)
		.pipe(gulp.dest('./build/images/resized'));

		cb();

}


// gulp tasks
exports.default = gulp.series(sassCompile, spriteCompile, resizeImages);

exports.svg = spriteCompile;
exports.css = sassCompile;
exports.images = resizeImages;

exports.watch = function () {
	gulp.watch(sassFiles, { ignoreInitial: false }, sassCompile);
	gulp.watch(svgFiles, { ignoreInitial: false }, spriteCompile);
	gulp.watch(images, { ignoreInitial: false }, resizeImages);
}