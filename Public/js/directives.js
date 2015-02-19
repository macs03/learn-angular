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
		.directive('pokemonComments',['pokemonService',function  (pokemonService) {
			return {
				restric: 'E',
				templateUrl: 'partials/pokemon-comments.html',
				scope:{
					name : '@name'
				},
				link: function  (scope, element, attributes) {
					attributes.$observe('name',function  (value) {
						if (value) {
							scope.name = value;
							scope.comments = pokemonService.getComments(value);
						}
					});
				},
				controller: function  ($scope) {
					$scope.comments = pokemonService.getComments($scope.name);
					$scope.comment = {};
					$scope.show = false;
					$scope.toggle = function  () {
					$scope.show = !$scope.show;
				};
				$scope.anonymousChanged = function  () {
					if ($scope.comment.anonymous) {
						$scope.comment.email = "";
					}
				};
				$scope.addComment = function  () {
					$scope.comment.date = Date.now();
					pokemonService.saveComment($scope.name,$scope.comment);
					$scope.comments = pokemonService.getComments($scope.name);
					//$scope.comments.push($scope.comment);
					$scope.comment = {};
				};
				},
				//controllerAs: 'cmtsCtrl'
			};
		}]);
})();