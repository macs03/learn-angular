(function  () {
	angular.module('pokedex.directives',[])
		.directive('pokemonData',function  () {
			return {
				restric: 'E',
				templateUrl: 'partials/pokemon-data.html'
			};
		})
		.directive('pokemonName',function  () {
			return {
				restric: 'A',
				templateUrl: 'partials/pokemon-name.html'
			};
		})
		.directive('pokemonImage',function  () {
			return {
				restric: 'E',
				templateUrl: 'partials/pokemon-images.html'
			};
		})
		.directive('pokemonStats',function  () {
			return {
				restric: 'E',
				templateUrl: 'partials/pokemon-stats.html'
			};
		})
		.directive('pokemonEvolutions',function  () {
			return {
				restric: 'E',
				templateUrl: 'partials/pokemon-evolutions.html'
			};
		})
		.directive('pokemonType', function () {
			return {
				restrict: 'E',
				templateUrl: 'partials/pokemon-type.html'
			};
})
		.directive('pokemonComments',function  () {
			return {
				restric: 'E',
				templateUrl: 'partials/pokemon-comments.html',
				controller: function  () {
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
				},
				controllerAs: 'cmtsCtrl'
			};
		});
})();