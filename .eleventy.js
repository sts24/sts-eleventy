module.exports = function(config){

	// shortcodes

	config.addNunjucksShortcode("icon", function(iconName, cssClass){
		return `
		<svg class="svg-icon ${cssClass}" shape-rendering="geometricPrecision" role="presentation">
			<use xlink: href="#${iconName}"></use>
    	</svg>`;
	});

	config.addPairedNunjucksShortcode("sectionHeader", function (data,sectionTitle,cssClass) {
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
			"woff"
		]
	};
};