(function  () {
	angular.module('pokedex.controllers',[])
		

		.controller('PokedexController', ['$scope', 'pokemonService','$routeParams', function ($scope, pokemonService, $routeParams) {
			var  type = $routeParams.type;

			if (type) {
				pokemonService.byType(type).then(function  (data) {
					$scope.pokemons = data;
				});
			} else{
				pokemonService.all().then(function (data) {
					$scope.pokemons = data;
				});
			}
		}])


		.controller('PokemonController',['$scope','pokemonService', '$routeParams',function ($scope, pokemonService, $routeParams) {
			
			var name = $routeParams.name;
			$scope.pokemon = [];

			pokemonService.byName(name)
				.then(function (data) {
					$scope.pokemon = data;
				});

			/*$scope.pokemon = {
					id: '001',
					name:'Bulbasaur',
					species: 'Seed Pokemon',
					type: ['Grass','Poison'],
					height:"2'4",
					weight:"15.2 lbs",
					abilities: ['Overgrowl','Chlorophyll'],
					stats: {
						hp: 45,
						atack: 49,
						defense: 49,
						"sp.atack": 65,
						"sp.defense": 65,
						speed: 45,
						total: 318
					},
					evolutions: ["Bulbasaur","Ivysaur","Venusaur"]
				};*/
		}])

		.controller('TabsController',function () {
			this.tab = 1;
			this.selectTab = function  (tab) {
				this.tab=tab;
			};
		});
		
		/*.controller('ComentsController', function  () {
			this.comments = [];
			this.comment = {};
			this.show = false;
			this.toggle = function  () {
				this.show = !this.show;
			};
			this.anonymousChanged = function  () {
				if (this.comment.anonymous) {
					this.comment.email = "";
				}
			};
			this.addComment = function  () {
				this.comment.date = Date.now();
				this.comments.push(this.comment);
				this.comment = {};
			};
		});*/
})();