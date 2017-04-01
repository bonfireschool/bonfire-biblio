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
routes.route('/categories/:category_id').get(categoryController.get);

routes.route('/quotes').get(quoteController.list);
routes.route('/quotes/:quote_id').get(quoteController.get);

routes.route('/authors').get(authorController.list);
routes.route('/authors/:author_id').get(authorController.get);

routes.route('/publishers').get(publisherController.list);
routes.route('/publishers/:publisher_id').get(publisherController.get);
// END - Public Categories

module.exports = routes;