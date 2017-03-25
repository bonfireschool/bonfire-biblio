var Quotes = require('../models/quote');

exports.list = 
	function(req, res) {
		Quotes.find(function(err, quotes) {
			if (err)
				res.send(err);

			res.json(quotes);
		});
	};

