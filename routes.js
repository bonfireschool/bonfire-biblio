// Models
var Categories = require('./models/category');
var Quotes = require('./models/quote');
var Authors = require('./models/author');
var Publishers = require('./models/publisher');


var routes = require('express').Router()

routes.use(function(res, req, next) {
    console.log('Someone has used the API.')
    next()
})


// Our routes
routes.get('/', function(req, res) {
    res.json({ message: 'Test this.' })
})

// BEGIN - Public Categories
routes.route('/categories')

	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get(function(req, res) {
		Categories.find(function(err, categories) {
			if (err)
				res.send(err);

			res.json(categories);
	});
});

routes.route('/quotes')

	.get(function(req, res) {
		Quotes.find(function(err, quotes) {
			if (err)
				res.send(err);

			res.json(quotes);
	})
});

routes.route('/authors')
	.get(function(req, res) {
		Authors.find(function(err, authors) {
			if(err)
				res.send(err);

			res.json(authors);
	});
});

routes.route('/publishers')
	.get(function(req, res) {
		Publishers.find(function(err, publishers) {
			if(err)
				res.send(err);

			res.json(authors);
	});
});
// END - Public Categories

module.exports = routes;