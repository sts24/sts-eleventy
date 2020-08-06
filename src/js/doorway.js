const navigateTo = function (linkPath) {

	fetch(linkPath)
		.then(function (response) {
			// return raw data, format to text
			return response.text();
		})
		.then(function (data) {
			// prepare page for animating out current page
			document.querySelector('#site').classList.add('page-animate-out');
			return data
		})
		.then(function (data) {
			// insert new data when animation ends

			return new Promise(function (resolve, reject) {

				var pageArea = document.querySelector('#site');

				pageArea.addEventListener('transitionend', function () {

					document.querySelectorAll('a').forEach(function (link) {
						link.removeEventListener('click', linkHandler, true);
					});

					pageArea.classList.remove('page-animate-out');

					var newDoc = new DOMParser().parseFromString(data, "text/html");

					// get data from new page
					var newTitle = newDoc.title;
					var newPageBody = newDoc.querySelector('#site');

					// insert new page data into container
					pageArea.innerHTML = newPageBody.innerHTML;
					document.title = newTitle;

					resolve(true);
				});

			});

			// 

			// return true
		})
		.then(function (data) {
			// animate in new page

			document.querySelector('#site').classList.add('page-animate-in');
			document.querySelector('#site').addEventListener('transitionend', function (e) {
				this.classList.remove('page-animate-in');
				setupLinks();
			});

			return true
		})
		.catch(function (error) {

		});

}


function linkHandler(e) {
	e.preventDefault();

	var linkPath = e.target.attributes.href.value;
	console.log(linkPath);
	navigateTo(linkPath);

	window.history.pushState({
		page: linkPath,
	}, '', linkPath);
}


function setupLinks() {
	document.querySelectorAll('a').forEach(function (link) {
		link.addEventListener('click', linkHandler);
	});
}

setupLinks();


window.addEventListener('popstate', function (e) {
	navigateTo(e.state.page);
});