var gulp = require('gulp');
var sass = require('gulp-sass');
var svgSprite = require('gulp-svg-sprite');
var autoprefixer = require('gulp-autoprefixer');

// files
let svgFiles = ['./src/svg-icons/general/*.svg', './src/svg-icons/home/*.svg'];
let sassFiles = './src/sass/*.scss';


// SASS

function sassCompile(cb) {
	cb();

	return gulp.src(sassFiles)
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
			.pipe(gulp.dest('./build/images'));

		return stream

	});

}



// gulp tasks
exports.default = function () {
	//gulp.watch(sassFiles, sassCompile);
	//gulp.watch(svgFiles, spriteCompile);
}

exports.build = gulp.series(sassCompile, spriteCompile);