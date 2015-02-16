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
			};
	});

	app.controller('TabsController',function () {
		this.tab = 1;
		this.selectTab = function  (tab) {
			this.tab=tab;
		};
	});
	
	app.controller('ComentsController', function  () {
		this.comments = [];
		this.comment = {};
		this.show = false;
		this.toggle = function  () {
			this.show = !this.show;
		};
		this.anonymousChanged = function  () {
			if (this.comment.anonymous) {
				this.comment.email = "";
			};	
		};
	});

})();