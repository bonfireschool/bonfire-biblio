var Publishers = require('../models/publisher');

exports.list = 
	function(req, res) {
		Publishers.find(function(err, publishers) {
			if (err)
				res.send(err);

			res.json(publishers);
		});
	};

