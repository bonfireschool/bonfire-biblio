var Authors = require('../models/author');

exports.list = 
	function(req, res) {
		Authors.find(function(err, authors) {
			if (err)
				res.send(err);

			res.json(authors);
		});
	};

exports.get = 
	function(req, res) {
		Authors.findById(req.params.author_id, function(err, author) {
			if (err)
				res.send(err);
			res.json(author);
		});
	};

exports.post =
	function(req, res) {
		var author = new Author(req.body);

		author.save(function(err, author) {
			if (err)
				res.send(err);

			res.json(author);
		});
	};
