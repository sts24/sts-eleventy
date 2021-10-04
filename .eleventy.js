

const pluginRss = require('@11ty/eleventy-plugin-rss');
const shortcodes = require('./utilities/shortcodes.js');
const collections = require('./utilities/collections.js');

module.exports = function (config) {

	// watch for asset files
	config.addWatchTarget("./src/_assets/");

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
	config.addPassthroughCopy("src/admin");
	config.addPassthroughCopy("src/_assets/images");

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