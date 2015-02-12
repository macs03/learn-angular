(function () {
	var app = angular.module('pokedex',[]);
	app.controller('PokemonController',function () {
		this.pokemon = {
				id: '001',
				name:'Bulbasaur',
				species: 'Seed Pokemon',
				type: ['Grass','Poison'],
				height:"2'4",
				weight:"15.2 lbs",
				abilities: ['Overgrowl','Chlorophyll'],
				img: 'http://img3.wikia.nocookie.net/__cb20140903033758/pokemon/images/b/b8/001Bulbasaur_Dream.png'
			};
	});
})();