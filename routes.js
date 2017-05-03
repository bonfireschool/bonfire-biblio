var routes = require('express').Router()

routes.use(function(res, req, next) {
    console.log('Someone has used the API.')
    next()
})


// Our routes
routes.get('/', function(req, res) {
    res.json({ message: 'Test this.' })
});

var CategoryController = require('./controllers/CategoryController');
var cc = new CategoryController();
routes.route('/categories').get(cc.list);
routes.route('/categories/:id').get(cc.get);
routes.route('/categories').post(cc.post)

var AuthorController = require('./controllers/AuthorController');
var ac = new AuthorController();
routes.route('/authors').get(ac.list);
routes.route('/authors/:id').get(ac.get);
routes.route('/authors').post(ac.post);

var QuoteController = require('./controllers/QuoteController');
var qc = new QuoteController();
routes.route('/quotes').get(qc.list);
routes.route('/quotes/:id').get(qc.get);
routes.route('/quotes').post(qc.post);

var PublisherController = require('./controllers/PublisherController');
var pc = new PublisherController();
routes.route('/publishers').get(qc.list);
routes.route('/publishers/:id').get(qc.get);
routes.route('/publishers').post(qc.post);


var EntryController = require('./controllers/EntryController');
var ec = new EntryController();
routes.route('/entries').get(ec.list);
routes.route('/publishers/:id').get(ec.get);

module.exports = routes;