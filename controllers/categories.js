var Category = require('../models/category');

exports.list = 
	function(req, res) {
		console.log(req.headers);

		Category.find(function(err, categories) {
			if (err)
				res.send(err);

			res.json(categories);
		});
	};

exports.get = 
	function(req, res) {
		Category.findById(req.params.category_id, function(err, category) {
			if (err)
				res.send(err);
			res.json(category);
		});
	};

exports.post = 
	function(req, res) {
		var category = new Category(req.body);

		category.save(function(err, category) {
			if (err)
				res.send(err);

			res.json(category);
		});

	};

