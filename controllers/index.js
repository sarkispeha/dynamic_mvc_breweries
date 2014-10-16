var breweries = require('../models/brewery-model.js')
var beers = require('../models/beers-model.js')


var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	brewery: function(req, res) {
		var breweryName = req.params.location;
		console.log(req.params.location);
		res.render('brewery',
			{breweries: breweries[breweryName]
			});
	},
	aa: function(req, res) {
		console.log(req.params.suds);
		res.render('beers',//finds jade file
			{bb: beers[req.params.suds]
			});
	}
};

module.exports = indexController;