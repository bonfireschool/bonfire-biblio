var routes = require('express').Router()

routes.use(function(res, req, next) {
    console.log('Someone has used the API.')
    next()
})


// Our routes
routes.get('/', function(req, res) {
    res.json({ message: 'Test this.' })
});

var categoryController = require('./controllers/categories');
var quoteController = require('./controllers/quotes');
var authorController = require('./controllers/authors');
var publisherController = require('./controllers/publishers');

// BEGIN - Public Categories
routes.route('/categories').get(categoryController.list);
routes.route('/quotes').get(quoteController.list);
routes.route('/authors').get(authorController.list);
routes.route('/publishers').get(publisherController.list);
// END - Public Categories

module.exports = routes;