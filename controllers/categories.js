var Categories = require('../models/category');

exports.list = 
	function(req, res) {
		Categories.find(function(err, categories) {
			if (err)
				res.send(err);

			res.json(categories);
		});
	};

exports.get = 
	function(req, res) {
		Categories.findById(req.params.category_id, function(err, category) {
			if (err)
				res.send(err);
			res.json(category);
		});
	};

