	(function () {
		var app = angular.module('pokedex',[
			'pokedex.controllers'
			]);
		

		app.directive('pokemonData',function  () {
			return {
				restric: 'E',
				templateUrl: 'partials/pokemon-data.html'
			};
		});
		app.directive('pokemonName',function  () {
			return {
				restric: 'A',
				templateUrl: 'partials/pokemon-name.html'
			};
		});
		app.directive('pokemonImage',function  () {
			return {
				restric: 'E',
				templateUrl: 'partials/pokemon-images.html'
			};
		});
		app.directive('pokemonStats',function  () {
			return {
				restric: 'E',
				templateUrl: 'partials/pokemon-stats.html'
			};
		});
		app.directive('pokemonEvolutions',function  () {
			return {
				restric: 'E',
				templateUrl: 'partials/pokemon-evolutions.html'
			};
		});
		app.directive('pokemonComments',function  () {
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