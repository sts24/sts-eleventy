const gulp = require('gulp');
const sass = require('gulp-sass');
const svgSprite = require('gulp-svg-sprite');
const autoprefixer = require('gulp-autoprefixer');
const responsive = require('gulp-responsive');
const cp = require("child_process");

// files
const svgFiles = ['./src/svg-icons/general/*.svg', './src/svg-icons/home/*.svg'];
const sassFiles = './src/sass/**/*.scss';
const images = ['./src/images/uploads/*.jpg'];


// SASS

function sassCompile(cb) {
	
	gulp.src(sassFiles)
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('./src/css/'));

	cb();
}


// make svg sprite

function spriteCompile(cb) {

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


// Eleventy
function eleventyRun() {
	return cp.spawn("eleventy", ["--serve", "--quiet"], {
		stdio: "inherit", shell: true
	});
}



// gulp tasks
exports.default = gulp.series(sassCompile, spriteCompile, resizeImages);

exports.watch = function () {
	gulp.watch(sassFiles, { ignoreInitial: false }, sassCompile);
	gulp.watch(svgFiles, { ignoreInitial: false }, spriteCompile);
	gulp.watch(images, { ignoreInitial: false }, resizeImages);

	eleventyRun();
}