var Categories = require('../models/category');

exports.list = 
	function(req, res) {
		Categories.find(function(err, categories) {
			if (err)
				res.send(err);

			res.json(categories);
		});
	};

