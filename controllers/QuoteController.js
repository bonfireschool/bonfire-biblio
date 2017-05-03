var Quotes = require('../models/quote');
var Controller = require('./Controller');
var controller = new Controller();

function QuoteController() {}

QuoteController.prototype.list =
	function(req, res) {
    	controller.list(req, res, Quotes);
	};

QuoteController.prototype.get =
	function(req, res) {
    	controller.get(req, res, Quotes);
	};

QuoteController.prototype.post =
	function(req, res) {
    	controller.post(req, res, Quotes);
	};
