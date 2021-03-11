const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

// files
const svgFiles = './src/svg-icons/*.svg';


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



// gulp tasks
exports.default = gulp.series(spriteCompile);

exports.svg = spriteCompile;

exports.watch = function () {
	gulp.watch(svgFiles, { ignoreInitial: false }, spriteCompile);
}