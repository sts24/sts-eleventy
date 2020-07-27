const navigateTo = function(linkPath){

	fetch(linkPath)
		.then(function(response){
			return response.text();
		})
		.then(function(data){

			var pageArea = document.querySelector('#site');

			var newDoc = new DOMParser().parseFromString(data, "text/html");

			var newTitle = newDoc.title;
			var newPageBody = newDoc.querySelector('#site');

			pageArea.innerHTML = newPageBody.innerHTML;
			document.title = newTitle;

			return true
		})
		.then(function(){
			setupLinks();

			return true
		})
		.catch(function(error){
			console.log(error);
		});

}


const setupLinks = function(){

	document.querySelectorAll('a').forEach(function(link){
		
		link.addEventListener('click', function(e){
			e.preventDefault();

			var linkPath = e.target.pathname;
			
			navigateTo(linkPath);

			window.history.pushState({
				page: linkPath,
			}, '', linkPath);

		});

	});

}

setupLinks();


window.addEventListener('popstate', function(e){
	navigateTo(e.state.page);
});