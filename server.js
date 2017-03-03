
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const util = require('util')

var port = process.env.PORT || 3000

// Models
var Categories = require('./models/categories');
var Quotes = require('./models/quotes');
var Authors = require('./models/authors');
var Publishers = require('./models/publishers');

var router = express.Router()

router.use(function(res, req, next) {
    console.log('Someone has used the API.')
    next()
})


// Our routes
router.get('/', function(req, res) {
    res.json({ message: 'Test this.' })
})

// BEGIN - Public Categories
router.route('/categories')

	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get(function(req, res) {
		Categories.find(function(err, categories) {
			if (err)
				res.send(err);

			res.json(categories);
		});
	});

router.route('/quotes')

	.get(function(req, res) {
		Quotes.find(function(err, quotes) {
			if (err)
				res.send(err);

			res.json(quotes);
		})
	});

router.route('/authors')
	.get(function(req, res) {
		Authors.find(function(err, authors) {
			if(err)
				res.send(err);

			res.json(authors);
		});
	});

router.route('/publishers')
	.get(function(req, res) {
		Publishers.find(function(err, publishers) {
			if(err)
				res.send(err);

			res.json(authors);
		});
	});
// END - Public Categories


app.use('/api', router);

app.listen(port)
console.log('It starts on port ' + port);

