const fs = require('fs');

function getImagePaths(imgPath, returnStyle = 'srcset'){

	const sizes = {
		'small': 200,
		'medium': 400,
		'large': 800
	};

	let allImgSizePaths = '';
	let imgURLs = {};
	let newImgPath = imgPath.split('/');
	let fileName = newImgPath[newImgPath.length - 1].split('.');

	for (let size in sizes) {
		let resizedPath = '/images/resized/' + fileName[0] + '-' + size + '.' + fileName[1];

		try {
			if (fs.existsSync('./build' + resizedPath)) {
				imgURLs[size] = resizedPath;
				allImgSizePaths += resizedPath + ' ' + sizes[size] + 'w, ';
			}
		} catch (err) {
			console.log((err));
		}

	}


	if(returnStyle == 'object'){
		return imgURLs;
	}

	if(returnStyle == 'srcset'){
		return allImgSizePaths;
	}

}


module.exports = {
	image: function (imgPath, imgSize, cssClass, alt) {

		const allImgSizePaths = getImagePaths(imgPath, 'srcset');

		let css = (cssClass !== '') ? 'class="' + cssClass + '"' : '';
		let imgTag = '<img srcset="' + allImgSizePaths + '" ' + css + ' alt="' + alt + '" loading="lazy" />';

		return imgTag
	},
	imageURL: function (imgPath, imgSize) {

		const allImgSizePaths = getImagePaths(imgPath, 'object');

		return allImgSizePaths[imgSize];
	}
}