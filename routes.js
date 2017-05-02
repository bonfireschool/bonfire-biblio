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
var entryController = require('./controllers/entries');

// End points
routes.route('/categories').get(categoryController.list);
routes.route('/categories/:category_id').get(categoryController.get);
routes.route('/categories').post(categoryController.post);

routes.route('/quotes').get(quoteController.list);
routes.route('/quotes/:quote_id').get(quoteController.get);
routes.route('/quotes').post(quoteController.post);

routes.route('/authors').get(authorController.list);
routes.route('/authors/:author_id').get(authorController.get);
routes.route('/authors').post(authorController.post);

routes.route('/publishers').get(publisherController.list);
routes.route('/publishers/:publisher_id').get(publisherController.get);
routes.route('/publishers').post(publisherController.post);

routes.route('/entries').get(entryController.list);
routes.route('/publishers/:publisher_id').get(entryController.get);

module.exports = routes;