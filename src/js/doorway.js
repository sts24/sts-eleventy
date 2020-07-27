document.querySelectorAll('a').forEach(function(link){
	
	link.addEventListener('click', function(e){
		e.preventDefault();

		console.log(e);

		var linkPath = e.target.pathname;
		

		fetch(linkPath)
			.then(function(response){
				return response.text();
			})
			.then(function(data){

				var pageArea = document.querySelector('#site');

				var newDoc = new DOMParser().parseFromString(data, "text/html");

				var newURL = newDoc.URL;
				var newTitle = newDoc.title;
				var newPageBody = newDoc.querySelector('#site');

				
				window.history.pushState({
					page: newURL,
					title: newTitle
				}, newTitle, linkPath);

				pageArea.innerHTML = newPageBody.innerHTML;
				document.title = newTitle;
			});

		
	});

});