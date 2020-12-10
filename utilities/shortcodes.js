function getIconCode(iconName, cssClass) {
	return `
	<svg class="svg-icon ${cssClass}" shape-rendering="geometricPrecision" role="presentation" aria-label="icon">
		<use xlink: href="#${iconName}"></use>
	</svg>`;
}

module.exports = {
	log: function (data) {
		console.log(data);
	},
	icon: function (iconName, cssClass) {
		return getIconCode(iconName, cssClass);
	},
	sectionHeader: function (data, sectionTitle = '', cssClass = '') {
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
			<header class="page-title padding-top-5 padding-bottom-2 ${cssClass}">
				<div class="row">
					${htmlSlot}
				</div>
			</header>
		`;
	},
	timestamp: function (UTC) {
		let newDate = new Date(UTC);

		return newDate.toLocaleDateString('en-US', {
			timeZone: 'UTC',
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
	},
	blogTitle: function (heading, css = '', post) {

		let postURL = (typeof post.data.url !== 'undefined') ? post.data.url : post.url;
		let classes = (css !== '') ? ' class="' + css + '"' : '';
		let html = '<' + heading + classes + '>';

		html += '<a href="' + postURL + '">';
		html += post.data.title;

		if (typeof post.data.url !== 'undefined') {
			html += getIconCode('icon-link', 'icon-size-1 icon-inline blog-link-icon') + ' ';
		}

		html += '</a></' + heading + '>';

		return html
	},
	cleanString: function (string) {
		return string.replace(/<\/?[^>]+(>|$)/g, "");
	}
}