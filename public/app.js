window.onload = function(){

	const view = document.getElementById('root');


	//Navagation Event
	function navigate(event){
		const route = event.target.attributes[0].value;
		const routeInfo = pageRoute.routes.filter(function(r){
			return r.path === route;
		})[0];
		if(!routeInfo){
			view.innerHTML = 'undefined Rout';
		}else{
			window.history.pushState({},'',routeInfo.path)
			view.innerHTML = 'you have clicked '+routeInfo.name+' button';
		}
	}

	//Grabing Active Routers
	const activeRoutes = Array.from(document.querySelectorAll('[route]'));
	activeRoutes.forEach(function(route){
		route.addEventListener('click',navigate,false);
	})

	//Creating new router class
	const Router = function(name, routes){
		return {name: name, routes: routes};
	}


	const pageRoute = new Router('pages',[

		{
			path:'/',
			name:'Root'
		},
		{
			path:'/about',
			name:'About'
		},
		{
			path:'/contact',
			name:'Contact'
		}
	])

	let currentPath = window.location.pathname;
	console.log(currentPath);
	if(currentPath === '/'){
		view.innerHTML = 'you are on root path';
	}else{
		let route = pageRoute.routes.filter(function(r){
			return r.path === currentPath;
		})[0];

		if(route){
			view.innerHTML = 'you are on '+route.name+' path';	
		}else{
			view.innerHTML = 'Path Not defined';
		}
		
	}

}