const pluginRss = require("@11ty/eleventy-plugin-rss");
const shortcodes = require('./utilities/shortcodes.js');
const images = require('./utilities/images.js');
const collections = require('./utilities/collections.js');

module.exports = function (config) {

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
	config.addShortcode("image", images.image);
	config.addShortcode("imageURL", images.imageURL);

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