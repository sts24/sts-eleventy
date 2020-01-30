const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (config) {

	// custom collections

	config.addCollection("orderedPortfolios", function (collection) {
		return collection.getFilteredByTag('portfolio').sort(function (a, b) {
			return b.data.order - a.data.order;
		});
	});


	// shortcodes

	function getIconCode(iconName, cssClass) {
		return `
		<svg class="svg-icon ${cssClass}" shape-rendering="geometricPrecision" role="presentation">
			<use xlink: href="#${iconName}"></use>
    	</svg>`;
	}

	config.addShortcode("icon", function (iconName, cssClass) {
		return getIconCode(iconName, cssClass);
	});

	config.addPairedShortcode("sectionHeader", function (data, sectionTitle = '', cssClass = '') {
		let htmlSlot = '';

		if (sectionTitle !== '') {
			htmlSlot = `
			<div class="col-s-12">
				<div class="section-heading">${sectionTitle}</div>
				${data}
			</div>`;
		} else {
			htmlSlot = `${data}`;
		}

		return `
			<header class="page-title padding-x-2 ${cssClass}">
				<div class="row">
					${htmlSlot}
				</div>
			</header>
		`;
	});

	config.addShortcode("timestamp", function (UTC) {
		let newDate = new Date(UTC);

		return newDate.toLocaleDateString('en-US', {
			timeZone: 'UTC',
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
	});

	config.addShortcode("blogTitle", function (heading, css = '', post) {

		let postURL = post.url;
		let classes = (css !== '') ? ' class="' + css + '"' : '';
		let html = '<' + heading + classes + '>';

		html += '<a href="' + postURL + '">';
		html += post.data.title;
		
		if (typeof post.data.url !== 'undefined') {
			html += getIconCode('icon-link', 'icon-size-1 icon-inline blog-link-icon') + ' ';
			postURL = post.data.url;
		}

		html += '</a></' + heading + '>';

		return html
	});

	config.addShortcode("cleanString", function (string) {
		return string.replace(/<\/?[^>]+(>|$)/g, "");
	});



	config.addShortcode("image", function (imgPath, imgSize, cssClass, alt) {
		let newImgPath = '';

		if (imgSize !== '') {
			newImgPath = imgPath.split('/');
			newImgPath = newImgPath[newImgPath.length - 1];
			newImgPath = newImgPath.split('.');
			newImgPath = '/images/resized/' + newImgPath[0] + '-' + imgSize + '.' + newImgPath[1];
		} else {
			newImgPath = imgPath;
		}

		let css = (cssClass !== '') ? 'class="' + cssClass + '"' : '';
		let imgTag = '<img srcset="' + newImgPath + '" ' + css + ' alt="' + alt + '" />';

		return imgTag
	});




	// add RSS feed
	config.addPlugin(pluginRss);


	// options

	return {
		dir: {
			input: "src",
			output: "build"
		},
		passthroughFileCopy: true,
		layout: 'layouts/page.njk',
		templateFormats: [
			"md",
			"jpg",
			"gif",
			"png",
			"woff",
			"html",
			"yml",
			"svg"
		]
	};
};