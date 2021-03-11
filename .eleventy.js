const pluginRss = require('@11ty/eleventy-plugin-rss');
const shortcodes = require('./utilities/shortcodes.js');
const collections = require('./utilities/collections.js');
const pluginSass = require('eleventy-plugin-sass');

module.exports = function (config) {

	// sass compile
	config.addPlugin(pluginSass, {
		outputDir: './build/css',
		remap: true,
		sourceMaps: true
	});

	// custom collections
	config.addCollection("orderedPortfolios", collections.orderedPortfolios);

	// shortcodes
	config.addShortcode("log", shortcodes.log);
	config.addShortcode("icon", shortcodes.icon);
	config.addPairedShortcode("sectionHeader", shortcodes.sectionHeader);
	config.addShortcode("timestamp", shortcodes.timestamp);
	config.addShortcode("blogTitle", shortcodes.blogTitle);
	config.addShortcode("cleanString", shortcodes.cleanString);
	
	// images
	config.cloudinaryCloudName = 'stsmith';
	config.addShortcode('cloudinaryImage', function (path, transforms, alt, css) {
		const cssClasses = (css !== '') ? `class="${css}"` : '';
		return `<img src="https://res.cloudinary.com/${config.cloudinaryCloudName}/${transforms}/${path}" alt="${alt}" ${cssClasses}>`
	})
	config.addShortcode('cloudinaryImageURL', function (path, transforms) {
		return `https://res.cloudinary.com/${config.cloudinaryCloudName}/${transforms}/${path}`
	})

	// add RSS feed
	config.addPlugin(pluginRss);

	// pass through certain files
	config.addPassthroughCopy("src/fonts");
	config.addPassthroughCopy("src/js");
	config.addPassthroughCopy("src/admin");

	// options

	return {
		dir: {
			input: "src",
			output: "build"
		},
		layout: 'page.njk',
		templateFormats: [
			"md",
			"njk",
			"html"
		]
	};
};