module.exports = function(config){

	// shortcodes

	function getIconCode(iconName, cssClass) {
		return `
		<svg class="svg-icon ${cssClass}" shape-rendering="geometricPrecision" role="presentation">
			<use xlink: href="#${iconName}"></use>
    	</svg>`;
	}

	config.addShortcode("icon", function(iconName, cssClass){
		return getIconCode(iconName, cssClass);
	});

	config.addPairedShortcode("sectionHeader", function (data,sectionTitle,cssClass) {
		return `
			<header class="page-title padding-x-2 ${cssClass}">
				<div class="row">
					<div class="col-s-12">
						<div class="section-heading">${sectionTitle}</div>
						${data}
					</div>
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

	config.addShortcode("blogTitle", function (heading,css='',post) {
		let postURL = post.url;
		let classes = (css !== '') ? ' class="' + css + '"' : '';
		let html = '<' + heading + classes + '>';

		if (post.data.url !== undefined) {
			html += getIconCode('icon-link', 'icon-size-1 icon-inline blog-link-icon') + ' ';
			postURL = post.data.url;
		}
		html += '<a href="' + postURL + '">';
		html += post.data.title;
		html += '</a></' + heading + '>';

		return html
	});

	config.addShortcode("cleanString", function (string) {
		return string.replace(/<\/?[^>]+(>|$)/g, "");
	});


	// options

	return {
		dir: {
			input: "src",
			output: "build"
		},
		layout: 'layouts/page.njk',
		templateFormats: [
			"md",
			"css",
			"jpg",
			"gif",
			"png",
			"svg",
			"woff",
			"html",
			"yml"
		]
	};
};