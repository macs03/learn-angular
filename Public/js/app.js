	(function () {
		var app = angular.module('pokedex',[
			'ngRoute',
			'pokedex.controllers',
			'pokedex.directives'
			]);

		app.config(['$routeProvider',function ($routeProvider) {
			$routeProvider
				.when('/',{
					templateUrl: 'views/pokedex.html',
					controller: 'PokedexContrller'
				})
				.when('/pokemon/:id',{
					templateUrl: 'views/pokemon.html',
					controller: 'PokemonController',
					controllerAs: 'pkmCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);

	})();