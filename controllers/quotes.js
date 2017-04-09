var Quotes = require('../models/quote');

exports.list = 
	function(req, res) {
		Quotes.find(function(err, quotes) {
			if (err)
				res.send(err);

			res.json(quotes);
		});
	};

exports.get = 
	function(req, res) {
		Quotes.findById(req.params.quote_id, function(err, quote) {
			if (err)
				res.send(err);
			res.json(quote);
		});
	};
