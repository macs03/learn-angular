	(function () {
		var app = angular.module('pokedex',[
			'ngRoute',
			'pokedex.controllers',
			'pokedex.directives'
			]);

		app.config(['$routeProvider',function ($routeProvider) {
			$routeProvider
				.when('/',{
					templateUrl: 'views/pokemon.html',
					controller: 'PokemonController',
					controllerAs: 'pkmCtrl'
				});
		}]);

	})();