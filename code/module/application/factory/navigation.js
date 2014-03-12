qh.getModule('application').factory("application.factory.navigation", [
	"$rootScope", 
function ($rootScope) {
	// All factories will go into a folder of factories in the module.
	var navigation = (function() {
		var nav = {};
		nav.tiers = {
			primary: {
				list: {},
				order: ["irondragon", "robomonk"],
				index: {order: []},
				defaultActive: "irondragon",
			},
			secondary: {
				list: {
					abilities: {label: "Abilities"},
					feats: {label: "Feats and Talents"},
				},
				order: ["abilities", "feats"],
				index: {order: []},
				defaultActive: "abilities",
			},
		};
		nav.setActive = function(characterName, sectionName) {
			angular.forEach([
				{param: characterName, name: "primary"},
				{param: sectionName, name: "secondary"},
			], function(tier) {
				var active = nav.tiers[tier.name].list[nav.tiers[tier.name].defaultActive];
				if (tier.param) {
					active = nav.tiers[tier.name].list[tier.param];
				}
				nav.tiers[tier.name].active = active;
			});

			nav.updateURLs();
		};
		nav.updateURLs = function() {
			/*var characterName = nav.tiers.primary.active.name;
			angular.forEach(nav.tiers.secondary.list, function(item) {
				item.url = "/"+[characterName, item.name].join("/")+"/";
			});*/
		};

		return nav;
	}());
	return navigation;
}]);
