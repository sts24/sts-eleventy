module.exports = {
	orderedPortfolios: function (collection) {
		return collection.getFilteredByTag('portfolio').sort(function (a, b) {
			return b.data.order - a.data.order;
		});
	}
}