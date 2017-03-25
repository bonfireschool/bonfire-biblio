var Authors = require('../models/author');

exports.list = 
	function(req, res) {
		Authors.find(function(err, authors) {
			if (err)
				res.send(err);

			res.json(authors);
		});
	};

